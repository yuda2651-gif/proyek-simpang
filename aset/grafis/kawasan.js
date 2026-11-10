/** Empat kawasan, masing-masing satu petak lama di dekat simpang dan tiga petak baru. */
const Kawasan = (() => {
  const sumber =
    typeof module === 'object' && module.exports ? require('./denah.js') : SeniKampung;
  const batas = { x: -320, y: -210, w: 1520, h: 910 },
    tepi = 378;
  const pusat = { x: 440, y: 249 };
  const data = [
    [
      'BL',
      'Barat laut',
      -1,
      -1,
      [
        ['kopdes', 'KOPDES Merah Putih', 'inti'],
        ['taman-kenanga', 'Taman Kenanga', 'kolam'],
        ['rumah-kenanga', 'Perumahan Kenanga', 'hunian'],
        ['masjid', 'Masjid Al-Ikhlas', 'masjid'],
      ],
    ],
    [
      'TL',
      'Timur laut',
      1,
      -1,
      [
        ['sppg', 'Dapur SPPG', 'inti'],
        ['pasar', 'Pasar Angsana', 'pasar'],
        ['kebun', 'Kebun warga', 'kebun'],
        ['puskesmas', 'Puskesmas Angsana', 'klinik'],
      ],
    ],
    [
      'TG',
      'Tenggara',
      1,
      1,
      [
        ['sd', 'SD Tunas Bangsa', 'inti'],
        ['lapangan', 'Lapangan olahraga', 'olahraga'],
        ['taman-tanjung', 'Taman Tanjung', 'bermain'],
        ['rumah-tanjung', 'Perumahan Tanjung', 'hunian'],
      ],
    ],
    [
      'BD',
      'Barat daya',
      -1,
      1,
      [
        ['gedung', 'Gedung Warga', 'inti'],
        ['gereja', 'Gereja Imanuel', 'gereja'],
        ['pustaka', 'Balai baca', 'pustaka'],
        ['rumah-cempaka', 'Kampung Cempaka', 'hunian'],
      ],
    ],
  ];
  const n = (t) => +t.toFixed(2),
    C = (k) => 'var(--' + k + ')',
    p = (u, v, z = 0) => [440 + (u - v) * 0.94, 254 + (u + v) * 0.52 - z];
  const pts = (points) =>
    points
      .map((q) =>
        p(...q)
          .map(n)
          .join(','),
      )
      .join(' ');
  const path = (points, color, width = 1) =>
    '<polyline points="' +
    pts(points) +
    '" fill="none" stroke="' +
    C(color) +
    '" stroke-width="' +
    width +
    '" stroke-linecap="round" stroke-linejoin="round"/>';
  const face = (points, color) =>
    '<polygon points="' + pts(points) + '" fill="' + C(color) + '"/>';
  const slab = (x, y, w, d, c, z = 0) =>
    face(
      [
        [x, y, z],
        [x + w, y, z],
        [x + w, y + d, z],
        [x, y + d, z],
      ],
      c,
    );
  const ring = (x, y, rx, ry, z = 0, count = 34) =>
    Array.from({ length: count }, (_, i) => [
      x + rx * Math.cos((2 * Math.PI * i) / count),
      y + ry * Math.sin((2 * Math.PI * i) / count),
      z,
    ]);
  function box(x, y, w, d, h, top, side, front, z = 0) {
    const a = x + w,
      b = y + d,
      t = z + h;
    return (
      face(
        [
          [a, y, z],
          [a, b, z],
          [a, b, t],
          [a, y, t],
        ],
        side,
      ) +
      face(
        [
          [x, b, z],
          [a, b, z],
          [a, b, t],
          [x, b, t],
        ],
        front,
      ) +
      slab(x, y, w, d, top, t)
    );
  }
  function roof(x, y, w, d, z, rise, palette = ['roof-lit', 'roof', 'roof-line']) {
    const a = x - 2,
      b = x + w + 2,
      f = y - 2,
      k = y + d + 2,
      m = (f + k) / 2;
    let s =
      face(
        [
          [a, f, z],
          [b, f, z],
          [b, m, z + rise],
          [a, m, z + rise],
        ],
        palette[0],
      ) +
      face(
        [
          [a, m, z + rise],
          [b, m, z + rise],
          [b, k, z],
          [a, k, z],
        ],
        palette[1],
      ) +
      face(
        [
          [b, f, z],
          [b, k, z],
          [b, m, z + rise],
        ],
        'wall-warm',
      );
    for (let h = 1; h < 4; h++)
      s += path(
        [
          [a, m + ((k - m) * h) / 4, z + rise * (1 - h / 4)],
          [b, m + ((k - m) * h) / 4, z + rise * (1 - h / 4)],
        ],
        palette[2],
        0.7,
      );
    for (let xx = a + 5; xx < b; xx += 9)
      s += path(
        [
          [xx, m, z + rise],
          [xx, k, z],
        ],
        palette[2],
        0.45,
      );
    return (
      s +
      path(
        [
          [a, m, z + rise],
          [b, m, z + rise],
        ],
        'ridge',
        1.8,
      )
    );
  }
  function win(x, y, z, w, h, side = false) {
    const panel = (off, floor, ww, hh, col) =>
      face(
        side
          ? [
              [x, y + off, floor],
              [x, y + off + ww, floor],
              [x, y + off + ww, floor + hh],
              [x, y + off, floor + hh],
            ]
          : [
              [x + off, y, floor],
              [x + off + ww, y, floor],
              [x + off + ww, y, floor + hh],
              [x + off, y, floor + hh],
            ],
        col,
      );
    return (
      panel(0, z, w, h, 'frame') +
      panel(1, z + 1, w - 2, h - 2, 'glass') +
      panel(w * 0.48, z, 0.8, h, 'frame')
    );
  }
  function sign(x, y, z, w, name, color = 'sign-green') {
    const [sx, sy] = p(x, y, z);
    return (
      '<g transform="matrix(.94 .52 0 1 ' +
      n(sx) +
      ' ' +
      n(sy) +
      ')"><rect width="' +
      w +
      '" height="13" rx="1.5" fill="' +
      C('sign-paper') +
      '"/><rect width="' +
      w +
      '" height="2" fill="' +
      C(color) +
      '"/><text x="' +
      w / 2 +
      '" y="9.8" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="' +
      Math.min(9, (1.58 * w) / name.length) +
      '" fill="' +
      C('sign-ink') +
      '">' +
      name +
      '</text></g>'
    );
  }
  function tree(x, y, scale = 1, kind = 0) {
    const [a, b] = p(x, y);
    const crown =
      kind % 3 === 0
        ? '<path d="M-17-21q-6-8 1-14 2-8 11-8 9-7 16 0 13 1 11 12 6 10-6 14-8 3-14-1-12 5-19-3Z" fill="' +
          C('leaf') +
          '"/><path d="M-14-32q4-11 12-10 11-5 15 4-9 1-13 7-8-3-14 3Z" fill="' +
          C('leaf-lit') +
          '"/>'
        : kind % 3 === 1
          ? [-18, -27, -35]
              .map(
                (cy, i) =>
                  '<ellipse cx="0" cy="' +
                  cy +
                  '" rx="' +
                  (19 - i * 5) +
                  '" ry="' +
                  (7 - i) +
                  '" fill="' +
                  C(i === 2 ? 'leaf-lit' : 'leaf') +
                  '"/>',
              )
              .join('')
          : '<g fill="' +
            C('leaf') +
            '"><path d="M1-34Q-13-45-21-27-9-37 1-34Zm0 0Q-4-51-14-46-4-43 1-34Zm0 0Q13-47 20-36 13-38 1-34Zm0 0Q19-33 18-20 10-32 1-34Zm0 0Q-14-34-14-20-6-31 1-34Z"/></g>';
    return (
      '<g transform="translate(' +
      n(a) +
      ' ' +
      n(b) +
      ') scale(' +
      scale +
      ')"><ellipse cx="4" cy="1" rx="13" ry="5" fill="' +
      C('plot-shadow') +
      '"/><path d="M0 0q3-16 1-35m0 16-7-6m7 5 7-8" fill="none" stroke="' +
      C('trunk') +
      '" stroke-width="2.6" stroke-linecap="round"/>' +
      crown +
      '</g>'
    );
  }
  function bench(x, y) {
    return (
      box(x, y, 16, 5, 2, 'wood-lit', 'timber', 'timber', 3) +
      box(x, y, 16, 1, 4, 'wood-lit', 'timber', 'timber', 5) +
      box(x + 2, y + 1, 2, 3, 3, 'timber', 'pole', 'pole') +
      box(x + 12, y + 1, 2, 3, 3, 'timber', 'pole', 'pole')
    );
  }
  const ground = [],
    objects = sumber.objek.slice(),
    petak = [];
  const add = (u, v, s) => objects.push([u + v, s]);
  function house(x, y, w, d, h, variant = 0) {
    let s =
      slab(x + 3, y + 4, w + 3, d + 4, 'plot-shadow') +
      box(x, y, w, d, h, 'plaster', 'wall-side', 'wall') +
      win(x + 3, y + d + 0.15, 5, w * 0.28, 9) +
      win(x + w + 0.15, y + 4, 6, d * 0.47, 9, true);
    s += face(
      [
        [x + w * 0.58, y + d + 0.2, 0],
        [x + w * 0.8, y + d + 0.2, 0],
        [x + w * 0.8, y + d + 0.2, 13],
        [x + w * 0.58, y + d + 0.2, 13],
      ],
      'door',
    );
    return (
      s +
      roof(
        x,
        y,
        w,
        d,
        h,
        9,
        variant % 3 === 1 ? ['metal-lit', 'metal', 'metal-line'] : undefined,
      ) +
      box(x + 7, y + d, 12, 5, 1.7, 'walk', 'curb-edge', 'paving')
    );
  }
  function halls(x, y, w, d, h, kind, title) {
    let s = box(x, y, w, d, h, 'flat-roof', 'wall-side', 'plaster');
    for (let i = 5; i < w - 8; i += 16) s += win(x + i, y + d + 0.12, 5, 10, 12);
    for (let i = 4; i < d - 8; i += 14) s += win(x + w + 0.12, y + i, 6, 9, 11, true);
    if (kind === 'flat')
      s += box(x - 2, y - 2, w + 4, d + 4, 3, 'flat-roof', 'gedung-band', 'metal-lit', h);
    else s += roof(x, y, w, d, h, 11);
    return s + sign(x + 1, y + d + 0.4, h + 1, w - 2, title);
  }
  function pavilion(x, y) {
    let s = box(x, y, 22, 22, 2, 'paving', 'wall-side', 'curb-edge');
    for (const i of [1, 19])
      for (const j of [1, 19]) s += box(x + i, y + j, 2, 2, 14, 'wood-lit', 'timber', 'trunk');
    return (
      s +
      face(
        [
          [x - 3, y - 3, 15],
          [x + 25, y - 3, 15],
          [x + 11, y + 11, 29],
        ],
        'roof-lit',
      ) +
      face(
        [
          [x + 25, y - 3, 15],
          [x + 25, y + 25, 15],
          [x + 11, y + 11, 29],
        ],
        'roof-line',
      ) +
      face(
        [
          [x + 25, y + 25, 15],
          [x - 3, y + 25, 15],
          [x + 11, y + 11, 29],
        ],
        'roof',
      )
    );
  }
  function gerbangLengkung(x, y, w, h) {
    const [a, b] = p(x, y);
    return (
      '<g transform="matrix(.94 .52 0 -1 ' +
      n(a) +
      ' ' +
      n(b) +
      ')"><path d="M0 0V' +
      n(h * 0.63) +
      'Q0 ' +
      n(h * 0.85) +
      ' ' +
      n(w / 2) +
      ' ' +
      h +
      'Q' +
      w +
      ' ' +
      n(h * 0.85) +
      ' ' +
      w +
      ' ' +
      n(h * 0.63) +
      'V0Z" fill="' +
      C('glass') +
      '" stroke="' +
      C('frame') +
      '" stroke-width="1.6"/></g>'
    );
  }
  function ambulans(x, y) {
    let s =
      box(x, y, 20, 9, 5, 'sign-paper', 'metal-lit', 'plaster', 2) +
      box(x + 1, y + 0.3, 14, 8.5, 7, 'sign-paper', 'wall-side', 'sign-paper', 6);
    s += box(x + 15, y + 0.3, 4, 8.3, 4, 'sign-paper', 'glass', 'glass', 6);
    const [a, b] = p(x + 7, y + 9.2, 9);
    s +=
      '<path d="M' +
      n(a - 2.3) +
      ' ' +
      n(b) +
      'h4.6m-2.3-2.3v4.6" stroke="' +
      C('sign-green') +
      '" stroke-width="1.5"/>';
    for (const f of [4, 16]) {
      const [a, b] = p(x + f, y + 9.3, 2.4);
      s +=
        '<circle cx="' +
        n(a) +
        '" cy="' +
        n(b) +
        '" r="2.3" fill="' +
        C('tire') +
        '"/><circle cx="' +
        n(a) +
        '" cy="' +
        n(b) +
        '" r="1" fill="' +
        C('metal-lit') +
        '"/>';
    }
    return s;
  }
  function dome(x, y, z, r) {
    const [a, b] = p(x, y, z);
    return (
      '<g transform="translate(' +
      n(a) +
      ' ' +
      n(b) +
      ')"><ellipse cy="1" rx="' +
      r +
      '" ry="' +
      r * 0.27 +
      '" fill="' +
      C('metal-line') +
      '"/><path d="M-' +
      r +
      ' 0Q-' +
      r +
      ' -' +
      r * 0.74 +
      ' 0 -' +
      r +
      'Q' +
      r +
      ' -' +
      r * 0.74 +
      ' ' +
      r +
      ' 0Q0 ' +
      r * 0.46 +
      ' -' +
      r +
      ' 0Z" fill="' +
      C('dome') +
      '"/>' +
      [-0.55, 0, 0.55]
        .map(
          (k) =>
            '<path d="M0 -' +
            r +
            'Q' +
            n(k * r) +
            ' -' +
            n(r * 0.6) +
            ' ' +
            n(k * r) +
            ' 1" fill="none" stroke="' +
            C('dome-line') +
            '" stroke-width=".9"/>',
        )
        .join('') +
      '<path d="M0 -' +
      r +
      'v-6" stroke="' +
      C('sign-ochre') +
      '" stroke-width="1.8"/></g>'
    );
  }
  function fillPlot(o) {
    const { x, y, w, h, jenis, name } = o,
      f = (u, v) => [x + u * w, y + v * h];
    const at = (u, v, fn) => {
      const [a, b] = f(u, v);
      add(a, b, fn(a, b));
    };
    const floor = (u, v, ww, dd, c) =>
      ground.push(slab(x + u * w, y + v * h, ww * w, dd * h, c));
    floor(0.02, 0.02, 0.96, 0.96, 'walk');
    floor(
      0.045,
      0.045,
      0.91,
      0.91,
      ['olahraga', 'pasar', 'klinik'].includes(jenis) ? 'paving' : 'garden',
    );
    if (jenis === 'hunian') {
      floor(0.04, 0.49, 0.92, 0.09, 'pave-line');
      floor(0.46, 0.05, 0.07, 0.9, 'pave-line');
      for (const [i, u, v] of [
        [0, 0.11, 0.12],
        [1, 0.59, 0.12],
        [2, 0.11, 0.64],
        [3, 0.59, 0.65],
      ]) {
        at(u, v, (a, b) => house(a, b, w * 0.28, h * 0.21, 18 + (i % 2) * 4, i));
        at(u + 0.23, v + 0.25, (a, b) => tree(a, b, 0.58, i));
      }
    } else if (jenis === 'kolam' || jenis === 'bermain') {
      const [cx, cy] = f(0.45, 0.48);
      ground.push(
        face(ring(cx, cy, w * 0.34, h * 0.3, 0), 'walk'),
        face(ring(cx, cy, w * 0.27, h * 0.23, 0), jenis === 'kolam' ? 'pond' : 'lawn'),
      );
      if (jenis === 'kolam') {
        ground.push(
          path(
            [
              [cx - 16, cy + 4],
              [cx - 9, cy + 6],
              [cx - 2, cy + 4],
            ],
            'pond-ripple',
            1.3,
          ),
        );
        at(0.68, 0.54, pavilion);
        at(0.16, 0.68, bench);
        at(0.51, 0.17, bench);
      } else {
        at(
          0.37,
          0.38,
          (a, b) =>
            box(a, b, 12, 11, 2, 'wood-lit', 'timber', 'trunk', 11) +
            roof(a - 1, b - 1, 14, 13, 20, 4) +
            path(
              [
                [a, b, 0],
                [a, b, 19],
                [a + 12, b, 19],
                [a + 12, b, 0],
              ],
              'trunk',
              2,
            ) +
            path(
              [
                [a + 6, b + 11, 12],
                [a + 6, b + 26, 1],
                [a + 10, b + 26, 1],
              ],
              'sign-ochre',
              4,
            ),
        );
        at(
          0.58,
          0.52,
          (a, b) =>
            path(
              [
                [a, b, 0],
                [a + 3, b + 1, 19],
                [a + 26, b + 1, 19],
                [a + 29, b, 0],
              ],
              'sign-green',
              2.5,
            ) +
            path(
              [
                [a + 10, b + 1, 19],
                [a + 10, b + 1, 5],
                [a + 18, b + 1, 5],
                [a + 18, b + 1, 19],
              ],
              'timber',
              1.3,
            ),
        );
        at(0.19, 0.71, bench);
        at(0.64, 0.7, bench);
      }
      for (const [i, u, v] of [
        [0, 0.11, 0.18],
        [1, 0.73, 0.18],
        [2, 0.84, 0.79],
        [3, 0.29, 0.8],
        [4, 0.14, 0.48],
      ])
        at(u, v, (a, b) => tree(a, b, 0.77 + (i % 2) * 0.15, i));
    } else if (jenis === 'masjid') {
      floor(0.1, 0.15, 0.76, 0.69, 'paving');
      at(
        0.18,
        0.18,
        (a, b) =>
          halls(a, b, 69, 52, 26, 'flat', 'MASJID AL-IKHLAS') +
          gerbangLengkung(a + 26, b + 52.5, 15, 13) +
          box(a + 20, b + 52, 25, 9, 2, 'walk', 'curb-edge', 'paving') +
          dome(a + 33, b + 23, 30, 23),
      );
      at(
        0.7,
        0.26,
        (a, b) =>
          box(a, b, 10, 10, 38, 'plaster', 'wall-side', 'plaster') +
          box(a - 2, b - 2, 14, 14, 3, 'walk', 'metal', 'metal-lit', 32) +
          dome(a + 5, b + 5, 40, 7),
      );
      at(0.16, 0.72, (a, b) => tree(a, b, 0.86, 2));
      at(0.74, 0.71, (a, b) => tree(a, b, 0.81, 2));
      at(0.43, 0.72, bench);
    } else if (jenis === 'gereja') {
      floor(0.13, 0.14, 0.76, 0.72, 'paving');
      at(
        0.17,
        0.2,
        (a, b) =>
          halls(a, b, 60, 42, 25, 'tile', 'GEREJA IMANUEL') +
          gerbangLengkung(a + 24, b + 42.3, 13, 13) +
          box(a + 20, b + 42, 19, 6, 1.5, 'walk', 'wall-side', 'curb-edge'),
      );
      at(0.58, 0.27, (a, b) => {
        let s =
          box(a, b, 14, 16, 41, 'roof-lit', 'wall-side', 'plaster') +
          win(a + 2, b + 16.3, 27, 9, 10) +
          roof(a, b, 14, 16, 41, 11);
        return (
          s +
          path(
            [
              [a + 7, b + 8, 50],
              [a + 7, b + 8, 64],
            ],
            'trunk',
            2.2,
          ) +
          path(
            [
              [a + 2, b + 8, 59],
              [a + 12, b + 8, 59],
            ],
            'trunk',
            2.2,
          )
        );
      });
      at(0.22, 0.74, bench);
      at(0.72, 0.65, (a, b) => tree(a, b, 0.93));
      at(0.11, 0.5, (a, b) => tree(a, b, 0.72, 1));
    } else if (jenis === 'kebun') {
      for (let r = 0; r < 4; r++) {
        floor(0.1, 0.16 + r * 0.15, 0.51, 0.105, 'bed');
        const [a, b] = f(0.12, 0.18 + r * 0.15);
        for (let j = 0; j < 7; j++)
          ground.push(face(ring(a + 8 * j, b, 2.9, 2, 1, 8), r % 2 ? 'leaf' : 'leaf-lit'));
      }
      at(0.69, 0.18, (a, b) => house(a, b, 23, 19, 14, 1));
      at(0.68, 0.57, (a, b) => tree(a, b, 0.85, 2));
      at(0.18, 0.8, bench);
    } else if (jenis === 'olahraga') {
      const [a, b] = f(0.12, 0.17),
        cw = w * 0.73,
        ch = h * 0.59;
      ground.push(
        slab(a, b, cw, ch, 'court-green'),
        path(
          [
            [a + 3, b + 3],
            [a + cw - 3, b + 3],
            [a + cw - 3, b + ch - 3],
            [a + 3, b + ch - 3],
            [a + 3, b + 3],
          ],
          'line-bright',
          1.45,
        ),
        path(
          [
            [a + cw / 2, b + 3],
            [a + cw / 2, b + ch - 3],
          ],
          'line-bright',
          1.1,
        ),
        path(
          [...ring(a + cw / 2, b + ch / 2, 12, 12), [a + cw / 2 + 12, b + ch / 2, 0]],
          'line-bright',
          1,
        ),
      );
      for (const end of [0, cw]) {
        const xx = a + end,
          yy = b + ch / 2,
          k = end ? -1 : 1;
        add(
          xx,
          yy,
          path(
            [
              [xx, yy],
              [xx, yy, 17],
              [xx + 3 * k, yy, 17],
            ],
            'pole',
            1.9,
          ) +
            face(
              [
                [xx + 3 * k, yy - 6, 15],
                [xx + 3 * k, yy + 6, 15],
                [xx + 3 * k, yy + 6, 21],
                [xx + 3 * k, yy - 6, 21],
              ],
              'plaster',
            ) +
            path(ring(xx + 6 * k, yy, 3, 3, 16, 12), 'roof-line', 1),
        );
      }
      at(0.16, 0.82, bench);
      at(0.6, 0.82, bench);
      at(0.85, 0.81, (a, b) => tree(a, b, 0.76));
    } else if (jenis === 'pasar') {
      at(0.13, 0.17, (a, b) => halls(a, b, 63, 32, 19, 'tile', 'PASAR ANGSANA'));
      for (let i = 0; i < 3; i++)
        at(
          0.13 + i * 0.24,
          0.6,
          (a, b) =>
            box(a, b, 21, 15, 9, 'wood-lit', 'timber', 'wall-warm') +
            box(
              a - 2,
              b - 2,
              25,
              19,
              2,
              i % 2 ? 'sign-ochre' : 'sign-green',
              'wall-side',
              'metal-line',
              12,
            ) +
            path(
              [
                [a, b],
                [a, b, 12],
                [a + 21, b, 12],
                [a + 21, b, 0],
              ],
              'trunk',
              1.3,
            ),
        );
      at(0.78, 0.27, (a, b) => tree(a, b, 0.75, 1));
    } else if (jenis === 'klinik') {
      floor(0.08, 0.14, 0.82, 0.69, 'paving');
      at(0.14, 0.2, (a, b) => {
        const s = halls(a, b, 78, 37, 25, 'flat', 'PUSKESMAS ANGSANA');
        const [sx, sy] = p(a + 68, b + 38, 20);
        return (
          s +
          '<path transform="translate(' +
          n(sx) +
          ' ' +
          n(sy) +
          ')" d="M-3 0h6M0-3v6" stroke="' +
          C('sign-green') +
          '" stroke-width="2.2"/>'
        );
      });
      at(0.39, 0.65, ambulans);
      at(0.18, 0.7, (a, b) => tree(a, b, 0.82));
      at(0.72, 0.68, bench);
      at(0.83, 0.34, (a, b) => tree(a, b, 0.68, 2));
    } else if (jenis === 'pustaka') {
      floor(0.09, 0.13, 0.77, 0.64, 'paving');
      at(
        0.16,
        0.21,
        (a, b) =>
          halls(a, b, 66, 37, 23, 'tile', 'BALAI BACA') +
          box(a + 13, b + 37, 37, 6, 2, 'roof-lit', 'timber', 'wood-lit', 13),
      );
      at(0.14, 0.64, bench);
      at(0.35, 0.74, bench);
      at(0.65, 0.29, (a, b) => tree(a, b, 1));
      at(0.77, 0.65, (a, b) => tree(a, b, 0.72, 1));
    }
    // Petak yang tidak mempunyai papan bangunan diberi papan nama taman atau lingkungan.
    if (['kolam', 'bermain', 'hunian', 'kebun', 'olahraga'].includes(jenis)) {
      at(
        0.16,
        0.88,
        (a, b) =>
          path(
            [
              [a, b],
              [a, b, 12],
            ],
            'pole',
            1.4,
          ) +
          path(
            [
              [a + 43, b],
              [a + 43, b, 12],
            ],
            'pole',
            1.4,
          ) +
          sign(a - 3, b, 15, 52, name),
      );
    }
  }
  const corners = [
    [-364, -378],
    [364, -378],
    [378, -364],
    [378, 364],
    [364, 378],
    [-364, 378],
    [-378, 364],
    [-378, -364],
  ];
  ground.push(
    face(
      corners.map(([x, y]) => [x, y, -10]),
      'isle-side',
    ),
  );
  for (let i = 2; i <= 5; i++) {
    const [a, b] = corners[i],
      [c, d] = corners[(i + 1) % 8];
    ground.push(
      face(
        [
          [a, b, 0],
          [c, d, 0],
          [c, d, -10],
          [a, b, -10],
        ],
        i === 2 ? 'isle-dark' : 'isle-side',
      ),
    );
  }
  ground.push(face(corners, 'plot'));
  // Gang dan jalur pejalan memisahkan empat petak pada tiap kuadran.
  for (const n of [-205, 205]) {
    ground.push(slab(n - 7, -370, 14, 740, 'alley'), slab(-370, n - 7, 740, 14, 'alley'));
    ground.push(
      path(
        [
          [n - 7, -365],
          [n - 7, 365],
        ],
        'walk',
        2,
      ),
      path(
        [
          [-365, n - 7],
          [365, n - 7],
        ],
        'walk',
        2,
      ),
    );
  }
  for (const [kode, group, su, sv, items] of data) {
    for (let i = 0; i < 4; i++) {
      const xs = i === 1 || i === 3 ? [215, 369] : [50, 197],
        ys = i >= 2 ? [215, 369] : [50, 197];
      const x = Math.min(xs[0] * su, xs[1] * su),
        y = Math.min(ys[0] * sv, ys[1] * sv),
        w = xs[1] - xs[0],
        h = ys[1] - ys[0];
      const [id, name, jenis] = items[i];
      const [cx, cy] = p(x + w / 2, y + h / 2, 10);
      const o = { id, name, group, kode, jenis, x, y, w, h, cx, cy };
      petak.push(o);
      if (i) fillPlot(o);
    }
  }
  ground.push(slab(-tepi, -49, tepi * 2, 98, 'road'), slab(-49, -tepi, 98, tepi * 2, 'road'));
  const along = (d, s, k) => ({ U: [k, s], T: [-s, k], S: [-k, -s], B: [s, -k] })[d];
  for (const dir of ['U', 'T', 'S', 'B']) {
    for (let s = -371; s < -203; s += 17)
      for (const lane of [0, 16, 32])
        ground.push(path([along(dir, s, lane), along(dir, s + 9, lane)], 'mark', 1.1));
  }
  ground.push(sumber.permukaan);
  // Cahaya dipanggang bersama permukaan jalan, jadi sorot statis tidak memakai filter blur per frame.
  const sorot = [],
    tiang = [];
  for (const d of ['U', 'T', 'S', 'B'])
    for (const [dist, side] of [
      [80, 1],
      [169, -1],
      [250, 1],
      [347, -1],
    ]) {
      const [u, v] = along(d, -dist, side * 53.5),
        [a, b] = along(d, -dist, side * 41.5),
        [x, y] = p(a, b, 27);
      const id = d + '-' + dist;
      sorot.push(
        '<g class="sorot-pju" data-sorot="' +
          id +
          '"><polygon points="' +
          pts(ring(a, b, 23, 20, 0, 28)) +
          '" fill="url(#kolam-cahaya)"/></g>',
      );
      const s =
        '<g data-pju="' +
        id +
        '">' +
        face(ring(u, v, 2.3, 2.3, 0, 9), 'metal-line') +
        path(
          [
            [u, v],
            [u, v, 24],
            [(u + a) / 2, (v + b) / 2, 27],
            [a, b, 27],
          ],
          'pole',
          1.85,
        ) +
        '<ellipse cx="' +
        n(x) +
        '" cy="' +
        n(y - 0.7) +
        '" rx="3.7" ry="1.8" fill="' +
        C('signal-case') +
        '"/><ellipse cx="' +
        n(x) +
        '" cy="' +
        n(y + 0.4) +
        '" rx="2.9" ry="1.1" fill="' +
        C('pju-bulb') +
        '"/><ellipse class="kilau-pju" cx="' +
        n(x) +
        '" cy="' +
        n(y + 0.7) +
        '" rx="5.1" ry="2.35" fill="' +
        C('pju-warm') +
        '" opacity=".24"/></g>';
      tiang.push({ id, u, v, a, b });
      add(u, v, s);
    }
  ground.push(sorot.join(''));
  objects.sort((a, b) => a[0] - b[0]);
  const back =
    ground.join('') +
    objects
      .filter(([d]) => d < 0)
      .map(([, s]) => s)
      .join('');
  const front =
    objects
      .filter(([d]) => d >= 0)
      .map(([, s]) => s)
      .join('') + sumber.kabel;
  const defs =
    sumber.definisi +
    '<radialGradient id="kolam-cahaya"><stop stop-color="var(--pju-warm)" stop-opacity=".77"/><stop offset=".46" stop-color="var(--pju-warm)" stop-opacity=".35"/><stop offset="1" stop-color="var(--pju-warm)" stop-opacity="0"/></radialGradient>';
  return { batas, pusat, petak, tiang, back, front, defs, p, tepi };
})();

if (typeof module === 'object' && module.exports) module.exports = Kawasan;
