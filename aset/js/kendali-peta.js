/** Klik di HMI boleh mengirim perintah. Klik di Simulator hanya membaca keadaan ruas. */
function pemilihJalan(kirim, konteks) {
  const hmi = document.body.dataset.page === 'hmi';
  const pads = [
    ...document.querySelectorAll('[data-mini-road], [data-peta-jalan], [data-baris-jalan]'),
  ];
  const captions = document.querySelectorAll('[data-inspect-label], #diagram-hint');
  let inspeksi = null,
    previous = '',
    terakhir = '';
  const roadOf = (el) => el.dataset.miniRoad || el.dataset.petaJalan || el.dataset.barisJalan;
  function lihat(s, ph, wall) {
    const key = [s?.mode, s?.pilihan].join('/');
    if (key !== previous) {
      inspeksi = null;
      previous = key;
    }
    const selected = inspeksi || (s?.mode === 'manual' ? s.pilihan : ph?.arah);
    const changing = s?.mulai != null && wall < s.basis;
    for (const node of pads) {
      const d = roadOf(node);
      const pressed = selected === d && !!s;
      if (node.getAttribute('aria-pressed') !== String(pressed))
        node.setAttribute('aria-pressed', String(pressed));
      if (node.dataset.miniRoad) {
        const color = ph?.warnaJalan[d] || '';
        if (node.dataset.miniColor !== color) node.dataset.miniColor = color;
        const disabled =
          !s || (s.mode === 'manual' && (konteks().locked || changing || konteks().pending));
        if (node.getAttribute('aria-disabled') !== String(disabled))
          node.setAttribute('aria-disabled', String(disabled));
      }
    }
    const name = DataSimpang.jalan[selected]?.nama;
    const color = ph?.warnaJalan[selected];
    let label = name && color ? name + ' · ' + color : 'Pilih nama jalan untuk melihat status.';
    if (hmi) {
      if (!s) label = 'Menunggu data simpang.';
      else if (changing)
        label =
          'Fase pengaman · menuju ' +
          (DataSimpang.jalan[s.mode === 'otomatis' ? 'U' : s.pilihan]?.nama || 'penyeberang') +
          '.';
      else if (s.mode === 'manual')
        label =
          selected === 'P'
            ? 'Giliran penyeberang dipilih.'
            : (name || 'Pilih ruas') + ' · ' + (s.mulai === null ? 'siap saat Mulai' : color);
      else
        label =
          inspeksi && name ? name + ' · ' + color : 'Ketuk satu lengan untuk melihat status.';
    }
    if (label !== terakhir) {
      terakhir = label;
      for (const cap of captions) cap.textContent = label;
    }
  }
  function pilih(node) {
    if (node.getAttribute('aria-disabled') === 'true') return;
    const d = roadOf(node),
      { state: s, now } = konteks();
    if (!s) return;
    if (hmi && s.mode === 'manual') {
      inspeksi = null;
      kirim('fase', d);
      return;
    }
    inspeksi = d;
    lihat(s, Siklus.lihat(s, now), now);
  }
  for (const node of pads) {
    node.addEventListener('click', () => pilih(node));
    if (node.tagName.toLowerCase() === 'g')
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pilih(node);
        }
      });
  }
  return {
    lihat,
    ikuti: () => {
      inspeksi = null;
    },
  };
}

/** Kedua pilihan wilayah selalu diambil dari katalog yang dipakai API cuaca. */
function pilihanCuaca(kirim) {
  const province = document.querySelector('#province'),
    city = document.querySelector('#city');
  for (const name of Object.keys(DataSimpang.wilayah)) province.add(new Option(name, name));
  let current = '';
  function daftar(prov) {
    if (prov === current) return;
    current = prov;
    city.replaceChildren(
      ...DataSimpang.wilayah[prov].map(([id]) => new Option(DataSimpang.kota[id].label, id)),
    );
  }
  province.addEventListener('change', () => {
    const value = province.value;
    daftar(value);
    kirim('kota', city.value);
  });
  city.addEventListener('change', () => kirim('kota', city.value));
  return (id, disabled) => {
    const prov = DataSimpang.kota[id].provinsi;
    // Jangan menimpa pilihan yang sedang menunggu balasan WebSocket.
    if (!disabled || !current) {
      daftar(prov);
      province.value = prov;
      city.value = id;
    }
    province.disabled = city.disabled = disabled;
    const tag = document.querySelector('[data-weather-province]');
    tag.textContent = ' · ' + prov;
  };
}
