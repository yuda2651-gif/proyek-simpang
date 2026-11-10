/** Satu kamera dan satu denah hidup. Dialog memindahkan elemen yang sama. */
const AtlasKampung = (() => {
  const slot = document.querySelector('[data-slot-peta="utama"]'),
    slotDialog = document.querySelector('[data-slot-peta="besar"]');
  const toolHome = document.querySelector('[data-slot-alat="utama"]'),
    toolDialog = document.querySelector('[data-slot-alat="besar"]');
  const dialog = document.getElementById('map-dialog'),
    page = document.body.dataset.page,
    world = Kawasan.batas;
  const ns = 'http://www.w3.org/2000/svg';
  const box = (cls) => {
    const el = document.createElement('div');
    el.className = cls;
    return el;
  };
  const svg = (cls, markup) => {
    const el = document.createElementNS(ns, 'svg');
    el.setAttribute('class', cls);
    el.setAttribute('viewBox', [world.x, world.y, world.w, world.h].join(' '));
    el.innerHTML = markup;
    return el;
  };
  const viewport = box('atlas-viewport map-field'),
    stage = box('atlas-stage');
  viewport.tabIndex = 0;
  viewport.setAttribute('role', 'group');
  viewport.setAttribute(
    'aria-label',
    'Denah kampung. Geser untuk menjelajah. Gunakan tombol panah, plus, minus, atau Home.',
  );
  const defs = document.getElementById('svg-defs');
  const polygon = [
    [-364, -378],
    [364, -378],
    [378, -364],
    [378, 364],
    [364, 378],
    [-364, 378],
    [-378, 364],
    [-378, -364],
  ]
    .map(([u, v]) => Kawasan.p(u, v).join(','))
    .join(' ');
  defs.insertAdjacentHTML(
    'beforeend',
    '<clipPath id="batas-kawasan"><polygon points="' + polygon + '"/></clipPath>',
  );
  const ground = box('atlas-layer atlas-ground'),
    upper = box('atlas-layer atlas-upper');
  const actors = svg(
    'atlas-layer atlas-pelaku',
    SeniKampung.panah + '<g clip-path="url(#batas-kawasan)">' + SeniKampung.pelaku + '</g>',
  );
  actors.setAttribute('aria-hidden', 'true');
  const hits = document.getElementById('hit-jalan');
  const info = svg('atlas-layer atlas-info', SeniKampung.sinyal + (hits ? hits.innerHTML : ''));
  // Pertahankan ukuran papan nama di layar saat skala peta berubah.
  const labels = box('atlas-labels');
  const plates = Object.entries(DataSimpang.jalan).map(([dir, road]) => {
    const button = document.createElement(page === 'simulator' ? 'button' : 'span');
    button.className = 'atlas-plaque';
    if (page === 'simulator') {
      button.type = 'button';
      button.dataset.petaJalan = dir;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', 'Lihat ' + road.arah + ', ' + road.nama);
    }
    const letter = document.createElement('b');
    letter.textContent = dir;
    button.append(letter, document.createTextNode(road.nama));
    labels.append(button);
    const [u, v] = { U: [0, -194], T: [194, 0], S: [0, 194], B: [-194, 0] }[dir];
    return { dir, button, point: Kawasan.p(u, v) };
  });
  for (const g of info.querySelectorAll('[data-peta-jalan]')) {
    g.removeAttribute('role');
    g.removeAttribute('tabindex');
    g.setAttribute('aria-hidden', 'true');
    g.querySelector('.tepi-label')?.remove();
  }
  if (hits) hits.remove();
  info.setAttribute('role', page === 'simulator' ? 'group' : 'img');
  info.setAttribute(
    'aria-label',
    'Lampu dan nama jalan. Denah terdiri atas 16 petak di sekitar simpang.',
  );
  stage.style.width = world.w + 'px';
  stage.style.height = world.h + 'px';
  stage.append(ground, actors, upper, info);
  const hud = box('atlas-hud');
  const adorn = document.getElementById('hiasan-denah');
  if (adorn) {
    hud.append(adorn.content);
    adorn.remove();
  }
  const rain = box('atlas-cuaca');
  rain.setAttribute('aria-hidden', 'true');
  const langit = svg(
    'atlas-langit',
    '<g class="night-stars" fill="var(--sky-star)"><circle cx="74" cy="41" r="1.2"/><circle cx="140" cy="24" r="1.6"/><circle cx="453" cy="40" r="1.3"/><circle cx="499" cy="22" r="1.4"/><circle cx="79" cy="306" r="1.5"/><circle cx="530" cy="290" r="1.2"/></g><g class="cloud-art" fill="none" stroke="var(--sky-cloud)" stroke-width="2" stroke-linecap="round"><path d="M79 48h23q4 0 4-3 0-3-4-3-4-8-10-2-4-2-6 3h-7m384 249h26q4 0 4-3 0-4-5-4-5-7-11-1-5-2-7 3h-8"/></g>',
  );
  langit.setAttribute('viewBox', '0 0 600 360');
  langit.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  langit.setAttribute('aria-hidden', 'true');
  viewport.append(langit, stage, rain, labels, hud);
  slot.append(viewport);
  const toolbar = document.getElementById('alat-peta'),
    jump = toolbar.querySelector('select');
  const groups = new Map();
  for (const item of Kawasan.petak) {
    if (!groups.has(item.group)) {
      const g = document.createElement('optgroup');
      g.label = item.group;
      groups.set(item.group, g);
      jump.append(g);
    }
    groups.get(item.group).append(new Option(item.name, item.id));
  }
  const media = lapisanKawasan(ground, upper, document.querySelector('[data-thumbnail-peta]'));
  let w = 1,
    h = 1,
    cx = Kawasan.pusat.x,
    cy = Kawasan.pusat.y,
    scale = 1,
    factor = 1,
    mode = 'pusat';
  let intersect = true,
    busy = false,
    pending = 0,
    quiet = 0,
    gesture = null,
    suppress = 0,
    moved = false;
  const base = () => Math.max(w / 660, h / 450),
    fit = () => Math.min(w / world.w, h / world.h) * 0.96;
  const maximum = () => Math.max(fit() * 2, Math.min(base() * 3.3, 4.6));
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const view = () => ({
    cx,
    cy,
    width: w,
    height: h,
    scale,
    visible: !document.hidden && (dialog.open || intersect),
  });
  const label = toolbar.querySelector('output');
  function constrain(value, start, length, screen) {
    const span = screen / scale;
    if (span >= length) return start + length / 2;
    const pad = 12 / scale;
    return clamp(value, start + span / 2 - pad, start + length - span / 2 + pad);
  }
  const activeBox = { x: 8, y: 3, w: 864, h: 510 };
  let previousDensity = 0;
  function sharpenActors() {
    const q =
      Math.ceil(Math.min(3.0, Math.max(1, scale * Math.min(devicePixelRatio || 1, 2))) * 2) / 2;
    if (q === previousDensity) return;
    previousDensity = q;
    for (const svg of [actors, info]) {
      svg.setAttribute(
        'viewBox',
        [activeBox.x, activeBox.y, activeBox.w, activeBox.h].join(' '),
      );
      Object.assign(svg.style, {
        width: activeBox.w * q + 'px',
        height: activeBox.h * q + 'px',
        left: activeBox.x - world.x + 'px',
        top: activeBox.y - world.y + 'px',
        transformOrigin: '0 0',
        transform: 'scale(' + 1 / q + ') translateZ(0)',
      });
    }
  }
  function positionLabels() {
    for (const { dir, button, point } of plates) {
      const x = w / 2 + (point[0] - cx) * scale,
        y = h / 2 + (point[1] - cy) * scale;
      const hidden = x < -18 || x > w + 18 || y < -14 || y > h + 14;
      if (button.hidden !== hidden) button.hidden = hidden;
      if (hidden) continue;
      const left = dir === 'B' || dir === 'S',
        above = dir === 'U' || dir === 'B';
      const bw = w < 450 ? 85 : 104,
        bh = w < 450 ? 21 : 24;
      const xx = clamp(left ? x - bw - 7 : x + 7, 4, w - bw - 4),
        yy = clamp(above ? y - bh - 7 : y + 6, 4, h - bh - 4);
      button.style.transform =
        'translate3d(' + Math.round(xx) + 'px,' + Math.round(yy) + 'px,0)';
    }
  }
  function draw() {
    pending = 0;
    cx = constrain(cx, world.x, world.w, w);
    cy = constrain(cy, world.y, world.h, h);
    const x = w / 2 - (cx - world.x) * scale,
      y = h / 2 - (cy - world.y) * scale;
    stage.style.transform =
      'translate3d(' +
      x.toFixed(2) +
      'px,' +
      y.toFixed(2) +
      'px,0) scale(' +
      scale.toFixed(5) +
      ')';
    viewport.dataset.mode = mode;
    viewport.dataset.cx = cx.toFixed(1);
    viewport.dataset.cy = cy.toFixed(1);
    viewport.dataset.scale = scale.toFixed(4);
    positionLabels();
    const txt = Math.round((scale / base()) * 100) + '%';
    if (label.textContent !== txt) label.textContent = txt;
    toolbar.querySelector('[data-cam="out"]').disabled = scale <= fit() + 0.001;
    toolbar.querySelector('[data-cam="in"]').disabled = scale >= maximum() - 0.001;
  }
  function requestDraw() {
    if (!pending) pending = requestAnimationFrame(draw);
  }
  function settle() {
    busy = false;
    viewport.classList.remove('atlas-interaksi');
    sharpenActors();
    media.rest(view());
  }
  function interact() {
    clearTimeout(quiet);
    if (!busy) {
      busy = true;
      viewport.classList.add('atlas-interaksi');
      media.moving();
    }
    quiet = setTimeout(settle, 175);
  }
  function gestureView() {
    mode = 'bebas';
    jump.value = '';
    interact();
    requestDraw();
  }
  function zoom(mult, px = w / 2, py = h / 2) {
    const old = scale;
    scale = clamp(scale * mult, fit(), maximum());
    cx += (px - w / 2) * (1 / old - 1 / scale);
    cy += (py - h / 2) * (1 / old - 1 / scale);
    factor = scale / base();
    gestureView();
  }
  function aim(name, remember = true) {
    mode = name;
    const parcel = Kawasan.petak.find((p) => p.id === name);
    if (name === 'semua') {
      cx = world.x + world.w / 2;
      cy = world.y + world.h / 2;
      scale = fit();
    } else if (parcel) {
      cx = parcel.cx;
      cy = parcel.cy - 7;
      scale = clamp(Math.min(w / 344, h / 224), fit(), maximum());
    } else {
      mode = 'pusat';
      cx = Kawasan.pusat.x;
      cy = Kawasan.pusat.y;
      scale = clamp(base(), fit(), maximum());
    }
    factor = scale / base();
    jump.value = parcel ? parcel.id : '';
    if (remember) interact();
    requestDraw();
  }
  function resize() {
    const rr = viewport.getBoundingClientRect();
    if (rr.width < 2 || rr.height < 2) return;
    if (w === rr.width && h === rr.height) return;
    w = rr.width;
    h = rr.height;
    for (const { button } of plates) {
      button.style.width = (w < 450 ? 85 : 104) + 'px';
      button.style.height = (w < 450 ? 21 : 24) + 'px';
    }
    if (mode === 'bebas') scale = clamp(base() * factor, fit(), maximum());
    else aim(mode, false);
    requestDraw();
    interact();
  }
  function dragBy(dx, dy) {
    cx -= dx / scale;
    cy -= dy / scale;
    gestureView();
  }
  viewport.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary || e.button !== 0) return;
    gesture = { id: e.pointerId, x: e.clientX, y: e.clientY, cx, cy };
    moved = false;
  });
  viewport.addEventListener('pointermove', (e) => {
    if (!gesture || gesture.id !== e.pointerId) return;
    const dx = e.clientX - gesture.x,
      dy = e.clientY - gesture.y;
    if (!moved && Math.abs(dx) + Math.abs(dy) < 5) return;
    if (!moved) {
      moved = true;
      try {
        viewport.setPointerCapture(e.pointerId);
      } catch {}
      viewport.classList.add('atlas-drag');
    }
    cx = gesture.cx - dx / scale;
    cy = gesture.cy - dy / scale;
    gestureView();
  });
  function end(e) {
    if (!gesture || e.pointerId !== gesture.id) return;
    if (moved) suppress = performance.now() + 250;
    gesture = null;
    moved = false;
    viewport.classList.remove('atlas-drag');
    if (viewport.hasPointerCapture?.(e.pointerId)) viewport.releasePointerCapture(e.pointerId);
  }
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
  viewport.addEventListener('lostpointercapture', end);
  viewport.addEventListener(
    'click',
    (e) => {
      if (!e.detail || performance.now() >= suppress) return;
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    true,
  );
  // Hanya denah besar yang menangani roda mouse. Gulir halaman biasa tetap ditangani browser.
  slotDialog.addEventListener(
    'wheel',
    (e) => {
      if (!dialog.open) return;
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? h : 1;
      if (e.ctrlKey || e.metaKey) {
        const r = viewport.getBoundingClientRect();
        zoom(Math.exp(-e.deltaY * unit * 0.006), e.clientX - r.x, e.clientY - r.y);
      } else if (e.shiftKey) dragBy(-e.deltaY * unit, -e.deltaX * unit);
      else dragBy(-e.deltaX * unit, -e.deltaY * unit);
    },
    { passive: false },
  );
  viewport.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const step = e.shiftKey ? 110 : 45;
    switch (e.key) {
      case 'ArrowLeft':
        dragBy(step, 0);
        break;
      case 'ArrowRight':
        dragBy(-step, 0);
        break;
      case 'ArrowUp':
        dragBy(0, step);
        break;
      case 'ArrowDown':
        dragBy(0, -step);
        break;
      case '+':
      case '=':
        zoom(1.3);
        break;
      case '-':
        zoom(1 / 1.3);
        break;
      case 'Home':
        aim('pusat');
        break;
      case '0':
        aim('semua');
        break;
      default:
        return;
    }
    e.preventDefault();
  });
  toolbar.addEventListener('click', (e) => {
    const cmd = e.target.closest('[data-cam]')?.dataset.cam;
    if (cmd === 'in' || cmd === 'out') zoom(cmd === 'in' ? 1.3 : 1 / 1.3);
    else if (cmd === 'pusat' || cmd === 'semua') aim(cmd);
  });
  jump.addEventListener('change', () => {
    if (jump.value) aim(jump.value);
  });
  const opener = document.getElementById('enlarge'),
    close = document.getElementById('close-dialog');
  function place(host, node) {
    if (host.moveBefore) host.moveBefore(node, null);
    else host.append(node);
  }
  opener.addEventListener('click', () => {
    if (dialog.open) return;
    dialog.showModal();
    place(slotDialog, viewport);
    place(toolDialog, toolbar);
    viewport.classList.add('atlas-besar');
    intersect = true;
    resize();
    close.focus({ preventScroll: true });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    place(slot, viewport);
    place(toolHome, toolbar);
    viewport.classList.remove('atlas-besar');
    resize();
    opener.focus({ preventScroll: true });
  });
  const ro = new ResizeObserver(resize);
  ro.observe(viewport);
  const io = new IntersectionObserver(
    (entries) => {
      intersect = entries[entries.length - 1].isIntersecting;
      if (intersect && !busy) media.rest(view());
      else if (!intersect) media.moving();
    },
    { rootMargin: '30px' },
  );
  io.observe(viewport);
  // Menggulir halaman hanya menunda penajaman detail. Kendaraan tetap bergerak agar animasi
  // tidak berhenti-mulai setiap kali halaman digulir; pembekuan hanya untuk geser/zoom kamera.
  let scrollQuiet = 0;
  window.addEventListener(
    'scroll',
    () => {
      if (dialog.open || !intersect) return;
      media.moving();
      clearTimeout(scrollQuiet);
      scrollQuiet = setTimeout(() => {
        if (!busy) media.rest(view());
      }, 175);
    },
    { passive: true },
  );
  let sky = '';
  function light() {
    const next = document.documentElement.dataset.sky;
    if (!next || sky === next) return;
    sky = next;
    media.choose(sky);
    const lit = Pencahayaan.lampuJalan(sky);
    for (const tag of document.querySelectorAll('[data-status-pju]'))
      tag.textContent = lit ? 'Lampu jalan menyala' : 'Lampu jalan padam';
    viewport.dataset.pju = lit ? 'menyala' : 'padam';
  }
  new MutationObserver(light).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-sky'],
  });
  resize();
  sharpenActors();
  light();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      light();
      if (!busy) media.rest(view());
    }
  });
  window.addEventListener('pagehide', (event) => {
    if (event.persisted) return;
    clearTimeout(quiet);
    clearTimeout(scrollQuiet);
    cancelAnimationFrame(pending);
    io.disconnect();
    ro.disconnect();
    media.dispose();
  });
  return {
    view,
    light,
    get busy() {
      return busy;
    },
    get visible() {
      return view().visible;
    },
    get sky() {
      return sky;
    },
  };
})();
