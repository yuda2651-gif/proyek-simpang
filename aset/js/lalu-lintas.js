// Bidang jalan: s ke depan, k ke kiri pengemudi. Posisi dan tangen diproyeksikan bersama.
function denahSimpang() {
  const vector = (d, s, k) => ({ U: [k, s], T: [-s, k], S: [-k, -s], B: [s, -k] })[d];
  const outlet = {
    U: { kiri: 'T', lurus: 'S', kanan: 'B' },
    T: { kiri: 'S', lurus: 'B', kanan: 'U' },
    S: { kiri: 'B', lurus: 'U', kanan: 'T' },
    B: { kiri: 'U', lurus: 'T', kanan: 'S' },
  };
  // Tambahkan arus pada ruas yang kini memanjang sampai batas kawasan.
  const fleet = document.querySelector('.atlas-pelaku g[clip-path]');
  if (!fleet.dataset.lengkap)
    for (const [i, dir] of ['U', 'T', 'S', 'B'].entries()) {
      const source = [...fleet.querySelectorAll('.kendaraan')].filter(
        (el) => el.dataset.arah === dir,
      );
      for (const [j, index] of [2, 1].entries()) {
        const el = source[index].cloneNode(true);
        el.dataset.pos = String(-275 - 55 * j - 3 * i);
        fleet.append(el);
      }
    }
  fleet.dataset.lengkap = 'ya';
  const width = { motor: 7, ojek: 7, bajaj: 8, mobil: 11, angkot: 13, truk: 14 };
  const colors = { merah: '--lamp-red', kuning: '--lamp-yellow', hijau: '--lamp-green' };
  const signals = [...document.querySelectorAll('.sinyal')].map((el) => ({
    dir: el.dataset.arah,
    lights: el.querySelectorAll('[data-warna]'),
    counter: el.querySelector('[data-detik]'),
  }));
  const arrows = document.querySelectorAll('[data-panah]');
  const cars = [...document.querySelectorAll('.kendaraan')].map((el, id) => {
    const { arah: d, rute: r, jenis: k, pos } = el.dataset;
    const start = r === 'kiri' ? -85 : -48,
      radius = r === 'kiri' ? 46 : 57;
    return {
      el,
      body: el.querySelector('.bentuk-mobil'),
      id,
      d,
      r,
      exit: outlet[d][r],
      seed: Number(pos),
      half: width[k],
      start,
      radius,
      arcEnd: start + (radius * Math.PI) / 2,
      lane: { kiri: 39, lurus: 24, kanan: 9 }[r],
      gate: -122 - width[k],
    };
  });
  const paths = new Map();
  for (const car of cars) {
    const key = car.d + car.r;
    if (!paths.has(key)) paths.set(key, []);
    paths.get(key).push(car);
  }
  const people = [...document.querySelectorAll('.penyeberang')].map((el) => ({
    el,
    body: el.querySelector('.badan-orang'),
    d: el.dataset.arm,
    k: Number(el.dataset.strip),
    side: Number(el.dataset.side),
    delay: Number(el.dataset.delay),
    start: null,
    wave: null,
    complete: false,
    lastPose: '',
  }));
  function pose(car) {
    const { p, r, start, radius, arcEnd, lane } = car;
    let s = p,
      k = lane,
      ds = 1,
      dk = 0,
      part = 'masuk';
    if (r === 'lurus') {
      if (p > -48) part = p < 48 ? 'simpang' : 'keluar';
    } else if (p > start) {
      const sign = r === 'kiri' ? 1 : -1;
      const theta = Math.min((p - start) / radius, Math.PI / 2);
      ds = Math.cos(theta);
      dk = sign * Math.sin(theta);
      s = start + radius * Math.sin(theta);
      k = lane + sign * radius * (1 - Math.cos(theta)) + sign * Math.max(0, p - arcEnd);
      part = p < arcEnd ? 'membelok' : 'keluar';
    }
    return { pos: vector(car.d, s, k), tangent: vector(car.d, ds, dk), part };
  }
  function outbound(car) {
    if (car.r === 'lurus') return car.p;
    if (car.p < car.arcEnd) return -Infinity;
    return -car.start + car.p - car.arcEnd;
  }
  function paintCar(car) {
    if (car.p === car.lastPainted) return;
    car.lastPainted = car.p;
    const {
      pos: [u, v],
      tangent: [a, b],
      part,
    } = pose(car);
    const x = 440 + (u - v) * 0.94,
      y = 254 + (u + v) * 0.52;
    car.el.setAttribute('transform', 'translate(' + x.toFixed(2) + ' ' + y.toFixed(2) + ')');
    ModelKendaraan.pasang(car, a, b);
    if (part !== car.part) {
      car.part = part;
      car.el.dataset.etape = part;
    }
  }
  function queue() {
    for (const lane of paths.values()) {
      lane.sort((a, b) => b.seed - a.seed);
      let last = -122;
      for (const car of lane) {
        car.p = Math.min(car.seed, last - car.half);
        last = car.p - car.half - 6;
        car.passed = false;
        car.wait = 0;
        paintCar(car);
      }
    }
  }
  function conflict(a, b) {
    return a.d !== b.d;
  }
  function move(dt, ph, now) {
    const advance = 51 * dt;
    const booked = cars.filter((c) => c.r !== 'kiri' && c.passed && outbound(c) < 65 + c.half);
    const candidates = [];
    for (const lane of paths.values()) {
      lane.sort((a, b) => b.p - a.p);
      const first = lane.find((c) => !c.passed);
      if (!first || first.r === 'kiri' || first.p + advance < first.gate) continue;
      if (!first.wait) first.wait = now;
      if (ph.warnaJalan[first.d] === 'hijau') candidates.push(first);
    }
    // Reservasi area tengah: belok kanan menunggu arus lawan, antrean lama didahulukan.
    candidates.sort((a, b) => a.wait - b.wait || a.id - b.id);
    const approved = new Set(),
      waiting = [];
    for (const c of candidates) {
      if (booked.some((x) => conflict(c, x)) || waiting.some((x) => conflict(c, x))) {
        waiting.push(c);
        continue;
      }
      booked.push(c);
      approved.add(c);
    }
    for (const lane of paths.values()) {
      let last = Infinity;
      for (const c of lane) {
        const allowed = c.r === 'kiri' ? ph.kiri : approved.has(c);
        const stop = c.passed || allowed ? Infinity : c.gate;
        c.p = Math.min(c.p + advance, stop, last - 5 - c.half);
        if (c.p > c.gate + 0.001) {
          c.passed = true;
          c.wait = 0;
        }
        last = c.p - c.half;
      }
      for (const c of lane) {
        if (outbound(c) > Kawasan.tepi + 20) {
          c.p = Math.min(-Kawasan.tepi - 20, last - c.half - 5);
          c.passed = false;
          c.wait = 0;
          last = c.p - c.half;
        }
        paintCar(c);
      }
    }
  }
  function drawPerson(w, k, walking, sign) {
    const [u, v] = vector(w.d, w.k, k);
    const key = [k.toFixed(2), walking, sign].join('/');
    if (key === w.lastPose) return;
    w.lastPose = key;
    w.el.setAttribute(
      'transform',
      'translate(' +
        (440 + (u - v) * 0.94).toFixed(2) +
        ' ' +
        (254 + (u + v) * 0.52).toFixed(2) +
        ')',
    );
    w.el.classList.toggle('berjalan', walking);
    w.el.dataset.status = walking ? 'menyeberang' : 'trotoar';
    w.body.setAttribute('transform', 'scale(' + sign + ' 1)');
  }
  function walk(ph, now, still) {
    for (const w of people) {
      if (!ph?.pejalan || still) {
        w.wave = null;
        w.start = null;
        drawPerson(w, w.side * 55, false, 1);
        continue;
      }
      if (w.wave !== ph.start) {
        w.wave = ph.start;
        w.start = null;
        w.complete = false;
        w.blocked = false;
      }
      if (w.complete) {
        drawPerson(w, w.side * 55, false, 1);
        continue;
      }
      const travel = 6200;
      const free = !cars.some(
        (c) => c.passed && (c.d === w.d || c.exit === w.d) && outbound(c) <= 117 + c.half,
      );
      if (w.start === null && free && now >= ph.start + 1000 * w.delay) {
        // Setelah refresh di tengah fase, gunakan jam fase untuk menempatkan pejalan di zebra yang sama.
        const ideal = ph.start + 1000 * w.delay;
        if (!w.blocked && now < ph.end) w.start = ideal;
        else if (now + travel < ph.end) w.start = now;
      }
      if (!free && w.start === null) w.blocked = true;
      if (w.start === null) {
        drawPerson(w, w.side * 55, false, 1);
        continue;
      }
      const fraction = Math.min(1, (now - w.start) / travel);
      if (fraction >= 1) {
        w.side = -w.side;
        w.complete = true;
        w.blocked = false;
        drawPerson(w, w.side * 55, false, 1);
        continue;
      }
      const [a, b] = vector(w.d, 0, -w.side);
      drawPerson(w, w.side * 55 * (1 - 2 * fraction), true, a - b < 0 ? -1 : 1);
    }
  }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let previous = 0,
    lastStart,
    lastLights = '';
  queue();
  return (state, ph, frame, now, animasikan = true) => {
    if (state?.mulai !== lastStart) {
      lastStart = state?.mulai;
      queue();
      previous = 0;
    }
    if (!animasikan) previous = frame;
    if (animasikan && (frame - previous >= 10 || !previous)) {
      const dt = previous ? Math.max(0, (frame - previous) / 1000) : 0;
      previous = frame;
      if (ph?.aktif && !reduced.matches) {
        move(Math.min(dt, 0.14), ph, now);
      }
      walk(ph, now, reduced.matches);
    }
    const key = ph
      ? [
          ...Object.values(ph.warnaJalan),
          ...Object.values(ph.detikJalan),
          ph.pejalan,
          ph.kiri,
        ].join('/')
      : 'hilang';
    if (key === lastLights) return;
    lastLights = key;
    for (const h of signals) {
      for (const b of h.lights)
        b.setAttribute(
          'fill',
          'var(' +
            (b.dataset.warna === ph?.warnaJalan[h.dir]
              ? colors[b.dataset.warna]
              : '--lamp-off') +
            ')',
        );
      h.counter.textContent =
        ph?.detikJalan[h.dir] != null ? String(ph.detikJalan[h.dir]).padStart(2, '0') : '–';
    }
    for (const a of arrows)
      a.setAttribute(
        'visibility',
        ph?.warnaJalan[a.dataset.panah] === 'hijau' ? 'visible' : 'hidden',
      );
  };
}
