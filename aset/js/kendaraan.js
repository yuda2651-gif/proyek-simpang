/**
 * Sprite isometrik berukuran dunia: f = maju, l = kiri pengemudi, z = tinggi.
 * Proyeksi alas mengikuti arah kendaraan. Tinggi kabin, roda, dan pengendara
 * selalu tegak. Satu sprite dipakai bersama untuk tiap jenis dan sudut 5°.
 */
const ModelKendaraan = (() => {
  const cache = new Map();
  const NS = 'http://www.w3.org/2000/svg';
  const warna = (k) => 'var(--' + k + ')';
  const angka = (v) => Number(v.toFixed(2));
  function gambar(jenis, a, b) {
    const dekat = b - a >= 0 ? 1 : -1;
    function titik(f, l, z = 0) {
      const u = f * a + l * b,
        v = f * b - l * a;
      return [angka((u - v) * 0.94), angka((u + v) * 0.52 - z)];
    }
    const pts = (p) => p.map((q) => titik(...q).join(',')).join(' ');
    const muka = (p, k) => '<polygon points="' + pts(p) + '" fill="' + warna(k) + '"/>';
    const garis = (p, k, w = 1) =>
      '<polyline points="' +
      pts(p) +
      '" fill="none" stroke="' +
      warna(k) +
      '" stroke-width="' +
      w +
      '" stroke-linecap="round" stroke-linejoin="round"/>';
    function oval(f, l, z, rx, ry, k) {
      const [x, y] = titik(f, l, z);
      return (
        '<ellipse cx="' +
        x +
        '" cy="' +
        y +
        '" rx="' +
        rx +
        '" ry="' +
        ry +
        '" fill="' +
        warna(k) +
        '"/>'
      );
    }
    function tapak(length, width) {
      const ring = [];
      for (let i = 0; i < 20; i++) {
        const t = (2 * Math.PI * i) / 20;
        ring.push([0.7 + length * Math.cos(t), 0.5 + width * Math.sin(t), 0]);
      }
      return '<g opacity=".48">' + muka(ring, 'car-shadow') + '</g>';
    }
    // Setiap lapisan mempunyai alas dan atap sendiri; kabin bisa menyempit di atas.
    function blok(base, roof, top, side, nose, back = side) {
      const ring = ([rear, front, w, z]) => [
        [rear, -w, z],
        [front, -w, z],
        [front, w, z],
        [rear, w, z],
      ];
      const bottom = ring(base),
        upper = ring(roof);
      const faces = bottom
        .map((p, i) => {
          const j = (i + 1) % 4,
            q = bottom[j];
          const depth = (p[0] + q[0]) * (a + b) + (p[1] + q[1]) * (b - a);
          return {
            depth,
            shape: muka([p, q, upper[j], upper[i]], [side, nose, side, back][i]),
          };
        })
        .sort((x, y) => x.depth - y.depth);
      return faces.map((x) => x.shape).join('') + muka(upper, top);
    }
    function ban(f, l, z, r) {
      const disk = (rad, lat, k) => {
        const outline = [];
        for (let i = 0; i < 16; i++) {
          const t = (2 * Math.PI * i) / 16;
          outline.push([f + rad * Math.cos(t), lat, z + rad * Math.sin(t)]);
        }
        return muka(outline, k);
      };
      return (
        disk(r, l, 'tire') +
        disk(r * 0.54, l + dekat * 0.25, 'wheel-hub') +
        disk(r * 0.22, l + dekat * 0.3, 'tire')
      );
    }
    function roda(axles, w, r, near) {
      const side = near ? dekat : -dekat;
      return axles.map((f) => ban(f, side * w, r, r)).join('');
    }
    if (jenis === 'motor' || jenis === 'ojek') {
      let svg = tapak(7.3, 2.7) + roda([-4.5, 4.6], 0.6, 2.65, true);
      svg += garis(
        [
          [-4.5, 0, 2.6],
          [-2.3, 0, 5],
          [2.2, 0, 4],
          [4.6, 0, 2.6],
        ],
        'vehicle-trim',
        1.5,
      );
      svg += blok(
        [-4.6, 3.3, 1.35, 3.1],
        [-4.2, 2.5, 1.6, 5.7],
        'roof-lit',
        'car-body',
        'glass',
      );
      svg += garis(
        [
          [4.6, 0, 2.6],
          [3.6, 0, 7.4],
          [3.5, 1.7, 7.5],
        ],
        'tire',
        0.85,
      );
      svg += garis(
        [
          [-0.7, 0.5, 7.1],
          [1, dekat * 1.7, 5.3],
          [1.6, dekat * 1.6, 3],
        ],
        'tire',
        1.45,
      );
      svg += blok(
        [-2.9, 0.2, 1.1, 5.8],
        [-1.9, 1.1, 1.85, 9.8],
        jenis === 'ojek' ? 'helmet-green' : 'roof-lit',
        jenis === 'ojek' ? 'ojek' : 'roof',
        'vehicle-trim',
      );
      svg += garis(
        [
          [0.3, dekat * 1.45, 8.9],
          [1.5, dekat * 1.7, 7.1],
          [3.4, dekat, 7.5],
        ],
        jenis === 'ojek' ? 'ojek' : 'roof',
        1.15,
      );
      svg +=
        oval(0.25, 0, 11.5, 2.4, 2.45, jenis === 'ojek' ? 'helmet-green' : 'helmet') +
        oval(1.4, 0, 11.5, 0.95, 0.63, 'glass');
      return svg;
    }
    if (jenis === 'bajaj') {
      let svg = tapak(8.5, 5) + roda([-4.8], 4, 2.6, false) + ban(6.3, 0, 2.45, 2.45);
      svg += blok(
        [-7.8, 5, 4.25, 2],
        [-7.3, 5.2, 4.5, 6.2],
        'sign-ochre',
        'bajaj',
        'roof-line',
      );
      svg += blok(
        [-6.8, 3.7, 4.1, 6.2],
        [-6.2, 2.3, 3.9, 10.8],
        'bajaj-roof',
        'glass',
        'glass',
      );
      svg += blok(
        [-7, 3.2, 4.5, 10.6],
        [-6.6, 3, 4.5, 11.7],
        'bajaj-roof',
        'metal',
        'metal-line',
      );
      return svg + roda([-4.8], 4.6, 2.55, true) + oval(4.8, 0, 7.1, 1, 0.7, 'lamp-yellow');
    }
    const spec = {
      mobil: {
        l: 10.4,
        w: 4.65,
        r: 2.55,
        base: 'car-body',
        roof: 'car-light',
        edge: 'vehicle-trim',
      },
      angkot: { l: 12.7, w: 4.85, r: 2.7, base: 'angkot', roof: 'angkot-lit', edge: 'ojek' },
      truk: { l: 14, w: 5.1, r: 2.95, base: 'truck', roof: 'truck-lit', edge: 'metal-line' },
    }[jenis];
    const { l, w, r, base, roof, edge } = spec,
      axles = [-l * 0.6, l * 0.58];
    let svg = tapak(l + 1, w + 1) + roda(axles, w - 0.6, r, false);
    svg += blok([-l, l - 0.5, w - 0.4, 2.55], [-l + 0.4, l, w, 6.5], roof, base, edge);
    const near = dekat * (w + 0.05);
    svg += garis(
      [
        [-l + 1, near, 3.2],
        [l - 1, near, 3.2],
      ],
      edge,
      0.7,
    );
    if (jenis === 'mobil') {
      svg += blok(
        [-7, 5.7, w - 0.35, 6.55],
        [-4.2, 2.7, w - 1, 10.8],
        roof,
        'vehicle-glass',
        'vehicle-windshield',
        'vehicle-glass',
      );
      svg += garis(
        [
          [-1, near * 0.88, 6.7],
          [-1, near * 0.77, 10.5],
        ],
        base,
        0.85,
      );
      svg += garis(
        [
          [5.8, -w + 0.8, 6.7],
          [5.8, w - 0.8, 6.7],
        ],
        edge,
        0.55,
      );
    } else if (jenis === 'angkot') {
      svg += blok(
        [-l + 0.7, l - 1, w - 0.25, 6.4],
        [-l + 1.4, l - 2.8, w - 0.55, 12.2],
        roof,
        'vehicle-glass',
        'vehicle-windshield',
      );
      for (const f of [-7, -2, 3, 7])
        svg += garis(
          [
            [f, near * 0.94, 6.5],
            [f, near * 0.89, 12.0],
          ],
          roof,
          0.8,
        );
      svg += blok(
        [-l + 1, l - 2.2, w - 0.25, 12],
        [-l + 1.4, l - 2.4, w - 0.35, 12.8],
        roof,
        base,
        base,
      );
      svg += garis(
        [
          [-l + 0.8, near, 5.6],
          [l - 0.6, near, 5.6],
        ],
        'sign-paper',
        1,
      );
    } else {
      svg += blok(
        [3, l - 0.55, w - 0.2, 6.4],
        [4.3, l - 2.0, w - 0.55, 11.9],
        roof,
        'vehicle-glass',
        'vehicle-windshield',
      );
      svg += blok(
        [-l + 0.4, 2.2, w + 0.1, 5.6],
        [-l + 0.5, 2.2, w + 0.1, 14.2],
        'car-light',
        'vehicle-cargo',
        'metal-line',
      );
      for (const f of [-11, -8, -5, -2, 0.8])
        svg += garis(
          [
            [f, near + 0.12 * dekat, 6.4],
            [f, near + 0.12 * dekat, 13.3],
          ],
          'metal-line',
          0.6,
        );
    }
    svg += roda(axles, w + 0.22, r, true);
    for (const side of [-1, 1]) {
      svg += muka(
        [
          [l, side * (w - 0.3), 4.2],
          [l, side * (w - 1.7), 4.2],
          [l, side * (w - 1.7), 5.45],
          [l, side * (w - 0.3), 5.45],
        ],
        'lamp-yellow',
      );
    }
    return svg;
  }
  function pasang(car, a, b) {
    const bucket = (Math.round((Math.atan2(b, a) * 180) / Math.PI / 5) * 5 + 360) % 360;
    const id = 'model-' + car.el.dataset.jenis + '-' + bucket;
    if (car.model === id) return;
    car.model = id;
    if (!cache.has(id)) {
      const sprite = document.createElementNS(NS, 'g'),
        theta = (bucket * Math.PI) / 180;
      sprite.id = id;
      sprite.innerHTML = gambar(car.el.dataset.jenis, Math.cos(theta), Math.sin(theta));
      document.getElementById('svg-defs').append(sprite);
      cache.set(id, true);
    }
    car.body.querySelector('use').setAttribute('href', '#' + id);
  }
  return { pasang };
})();
