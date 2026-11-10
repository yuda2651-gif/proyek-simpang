/** Render vektor diam saat palet berubah. Geser dan perbesar memakai kembali hasilnya. */
function lapisanKawasan(ground, upper, thumb) {
  const world = Kawasan.batas;
  const fields = [Kawasan.back, Kawasan.front],
    hosts = [ground, upper];
  const skyCache = new Map();
  const tokens = [
    ...new Set(
      (
        fields.join('') +
        Kawasan.defs +
        SeniKampung.sinyal +
        SeniKampung.pelaku +
        ' --tire --car-body --car-light --vehicle-trim --vehicle-glass --vehicle-windshield --vehicle-cargo --wheel-hub --truck --truck-lit --angkot --angkot-lit --helmet --helmet-green --helmet-lit --bajaj --bajaj-roof --lamp-green --lamp-yellow --lamp-red --lamp-off --lamp-text'
      ).match(/--[a-z][\w-]*/g),
    ),
  ];
  const density = matchMedia('(max-width:600px)').matches ? 1.1 : 1.4;
  let generation = 0,
    detailId = 0,
    sources = null,
    baseSky = '',
    requested = '',
    patch = null,
    latest = null,
    detailTimer = 0,
    idle = 0,
    disposed = false;
  function palette(sky) {
    const style = getComputedStyle(document.documentElement);
    const vars = tokens
      .map((k) => k + ':' + (style.getPropertyValue(k).trim() || '#798a78'))
      .join(';');
    const on = Pencahayaan.lampuJalan(sky);
    return (
      '<style>:root{' +
      vars +
      '} .warga-lapangan-sd{display:' +
      (on ? 'none' : 'inline') +
      '} .sorot-pju{opacity:' +
      (sky === 'malam' ? '.89' : sky === 'sore' ? '.45' : '0') +
      '} .kilau-pju{display:' +
      (on ? 'inline' : 'none') +
      '}</style>'
    );
  }
  function source(shape, box, ratio, colors) {
    const w = Math.ceil(box.w * ratio),
      h = Math.ceil(box.h * ratio);
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
      w +
      '" height="' +
      h +
      '" viewBox="' +
      [box.x, box.y, box.w, box.h].join(' ') +
      '" preserveAspectRatio="none">' +
      colors +
      '<defs>' +
      Kawasan.defs +
      '</defs>' +
      shape +
      '</svg>'
    );
  }
  function loadSvg(xml) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(new Blob([xml], { type: 'image/svg+xml;charset=utf-8' }));
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(Error('Lapisan vektor gagal dibaca.'));
      };
      img.src = url;
    });
  }
  // Gambar dari sumber SVG pada skala tujuan. Geometri diurai sekali untuk tiap suasana.
  function crop(img, bounds, box, density) {
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(box.w * density);
    canvas.height = Math.ceil(box.h * density);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw Error('Canvas tidak tersedia');
    const sx = img.naturalWidth / bounds.w;
    const sy = img.naturalHeight / bounds.h;
    ctx.drawImage(
      img,
      (box.x - bounds.x) * sx,
      (box.y - bounds.y) * sy,
      box.w * sx,
      box.h * sy,
      0,
      0,
      canvas.width,
      canvas.height,
    );
    return canvas;
  }
  async function raster(shape, box, ratio, colors) {
    const img = await loadSvg(source(shape, box, ratio, colors));
    return crop(img, box, box, ratio);
  }
  function clearDetail() {
    detailId++;
    clearTimeout(detailTimer);
    if (idle && window.cancelIdleCallback) cancelIdleCallback(idle);
    idle = 0;
  }
  function put(layers, sky) {
    const pair = layers.canvases;
    sources = layers.images;
    for (let i = 0; i < 2; i++) {
      pair[i].className = 'atlas-base';
      hosts[i].replaceChildren(pair[i]);
    }
    baseSky = sky;
    patch = null;
    ground.dataset.sky = sky;
    upper.dataset.sky = sky;
    if (thumb) {
      const w = 640,
        h = 210,
        box = { x: 256, y: 159, w: 365, h: 120 };
      thumb.width = w;
      thumb.height = h;
      const ctx = thumb.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      for (const canvas of pair) {
        const sx = canvas.width / world.w,
          sy = canvas.height / world.h;
        ctx.drawImage(
          canvas,
          (box.x - world.x) * sx,
          (box.y - world.y) * sy,
          box.w * sx,
          box.h * sy,
          0,
          0,
          w,
          h,
        );
      }
      // Ambil satu cuplikan pelaku & kepala lampu; potongan kartu tidak ikut digambar setiap frame.
      const live = document.querySelector('.atlas-pelaku');
      if (live) {
        const symbols = [
          ...new Set(
            [...live.querySelectorAll('.bentuk-mobil use')]
              .map((el) => el.getAttribute('href'))
              .filter(Boolean),
          ),
        ];
        const defs =
          '<defs>' +
          symbols.map((id) => document.getElementById(id.slice(1))?.outerHTML || '').join('') +
          (document.getElementById('batas-kawasan')?.outerHTML || '') +
          '</defs>';
        const lamps = [...document.querySelectorAll('.atlas-info .sinyal')]
          .map((el) => el.outerHTML)
          .join('');
        const tint = palette(sky);
        Promise.all([
          raster(defs + live.innerHTML, box, w / box.w, tint),
          raster(lamps, box, w / box.w, tint),
        ])
          .then(([traffic, heads]) => {
            if (baseSky !== sky || disposed) return;
            ctx.clearRect(0, 0, w, h);
            const copy = (c) =>
              ctx.drawImage(
                c,
                ((box.x - world.x) * c.width) / world.w,
                ((box.y - world.y) * c.height) / world.h,
                (box.w * c.width) / world.w,
                (box.h * c.height) / world.h,
                0,
                0,
                w,
                h,
              );
            copy(pair[0]);
            ctx.drawImage(traffic, 0, 0, w, h);
            copy(pair[1]);
            ctx.drawImage(heads, 0, 0, w, h);
          })
          .catch(() => {
            /* Gambar petak statis tetap tampil. */
          });
      }
    }
    if (latest) rest(latest);
  }
  function choose(sky) {
    if (disposed || requested === sky) return;
    requested = sky;
    const rev = ++generation;
    clearDetail();
    if (skyCache.has(sky)) {
      const layers = skyCache.get(sky);
      skyCache.delete(sky);
      skyCache.set(sky, layers);
      put(layers, sky);
      return;
    }
    const colors = palette(sky);
    Promise.all(fields.map((shape) => loadSvg(source(shape, world, 1, colors))))
      .then((images) => {
        if (disposed || rev !== generation) return;
        const layers = { images, canvases: images.map((img) => crop(img, world, world, density)) };
        skyCache.set(sky, layers);
        while (skyCache.size > 2) skyCache.delete(skyCache.keys().next().value);
        put(layers, sky);
      })
      .catch(() => {
        if (disposed || rev !== generation) return;
        // Gunakan vektor asli bila perangkat tidak menyediakan konteks canvas.
        fields.forEach((shape, i) => {
          const img = document.createElement('img');
          img.className = 'atlas-base';
          img.alt = '';
          const xml = source(shape, world, 1, colors);
          const url = URL.createObjectURL(new Blob([xml], { type: 'image/svg+xml' }));
          img.onload = img.onerror = () => URL.revokeObjectURL(url);
          img.src = url;
          hosts[i].replaceChildren(img);
        });
        sources = null;
        baseSky = sky;
        ground.dataset.sky = sky;
        upper.dataset.sky = sky;
      });
  }
  function rest(view) {
    latest = view;
    clearDetail();
    if (!sources || requested !== baseSky || !view.visible) return;
    const resolution = Math.min(view.scale * Math.min(devicePixelRatio || 1, 2), 4.6);
    if (resolution < density * 1.14) {
      for (const h of hosts) h.querySelector('.atlas-detail')?.remove();
      patch = null;
      return;
    }
    const ww = view.width / view.scale,
      hh = view.height / view.scale;
    const visible = {
      left: Math.max(world.x, view.cx - ww / 2),
      right: Math.min(world.x + world.w, view.cx + ww / 2),
      top: Math.max(world.y, view.cy - hh / 2),
      bottom: Math.min(world.y + world.h, view.cy + hh / 2),
    };
    if (
      patch &&
      patch.resolution >= resolution * 0.97 &&
      visible.left >= patch.x &&
      visible.right <= patch.x + patch.w &&
      visible.top >= patch.y &&
      visible.bottom <= patch.y + patch.h
    )
      return;
    const id = detailId,
      rev = generation;
    const render = () => {
      if (disposed || id !== detailId || rev !== generation) return;
      const x = Math.max(world.x, Math.floor(visible.left - ww * 0.15)),
        y = Math.max(world.y, Math.floor(visible.top - hh * 0.15));
      const w = Math.min(world.x + world.w, visible.right + ww * 0.15) - x,
        h = Math.min(world.y + world.h, visible.bottom + hh * 0.15) - y;
      if (w <= 1 || h <= 1) return;
      const quality = Math.min(resolution, Math.sqrt(3600000 / (w * h))),
        box = { x, y, w, h };
      try {
        const pair = sources.map((img) => crop(img, world, box, quality));
        for (const [i, canvas] of pair.entries()) {
          canvas.className = 'atlas-detail';
          Object.assign(canvas.style, {
            left: x - world.x + 'px',
            top: y - world.y + 'px',
            width: w + 'px',
            height: h + 'px',
          });
          hosts[i].querySelector('.atlas-detail')?.remove();
          hosts[i].append(canvas);
        }
        patch = { ...box, resolution };
      } catch {
        // Jika memori kanvas terbatas, lapisan dasar tetap menampilkan semua aset.
      }
    };
    detailTimer = setTimeout(() => {
      if (window.requestIdleCallback) idle = requestIdleCallback(render, { timeout: 650 });
      else render();
    }, 280);
  }
  function dispose() {
    disposed = true;
    generation++;
    clearDetail();
    sources = null;
    skyCache.clear();
  }
  return { choose, rest, moving: clearDetail, dispose };
}
