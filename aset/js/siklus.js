/** Mesin fase murni. Seluruh waktu dalam milidetik, kecuali konfigurasi durasi (detik). */
const Siklus = (() => {
  const data =
    typeof module === 'object' && module.exports ? require('./data.js') : DataSimpang;
  const { arah, kota, suasana } = data;
  const fase = [...arah, 'P'];
  const modeSah = (mode) => mode === 'otomatis' || mode === 'manual';
  const batas = { hijau: [3, 120], kuning: [3, 15], jeda: [2, 20] };
  const waktuJalan = 9000;
  const standar = () => ({ hijau: { U: 12, T: 12, S: 12, B: 12 }, kuning: 3, jeda: 2 });
  const awal = () => ({
    versi: 3,
    mulai: null,
    basis: 0,
    mode: 'otomatis',
    pilihan: 'U',
    durasi: standar(),
    lintasan: [],
    sisaPejalan: null,
    lingkungan: { suasana: 'wib', kota: 'Jakarta' },
  });
  function rentang(v, [min, max]) {
    return Number.isInteger(v) && v >= min && v <= max;
  }
  function sah(d) {
    return (
      !!d &&
      arah.every((a) => rentang(d.hijau?.[a], batas.hijau)) &&
      rentang(d.kuning, batas.kuning) &&
      rentang(d.jeda, batas.jeda)
    );
  }
  function lampuAwal() {
    return { U: 'merah', T: 'merah', S: 'merah', B: 'merah' };
  }
  function restore(raw) {
    if (!raw || typeof raw !== 'object') return awal();
    const s = awal();
    if (
      raw.lingkungan &&
      suasana.includes(raw.lingkungan.suasana) &&
      Object.hasOwn(kota, raw.lingkungan.kota)
    )
      s.lingkungan = { ...raw.lingkungan };
    if (raw.mode === 'manual') s.mode = 'manual';
    const pilihan = { US: 'U', TB: 'T' }[raw.pilihan] || raw.pilihan;
    if (fase.includes(pilihan)) s.pilihan = pilihan;
    if (raw.versi !== 3) {
      // Pengendali lama menyalakan dua lengan sekaligus. Sesi baru dimulai dari semua merah.
      const old = raw.durasi;
      if (
        rentang(old?.hijau, batas.hijau) &&
        rentang(old.kuning, batas.kuning) &&
        rentang(old.jeda, batas.jeda)
      ) {
        s.durasi = {
          hijau: Object.fromEntries(arah.map((a) => [a, old.hijau])),
          kuning: old.kuning,
          jeda: old.jeda,
        };
      }
      return s;
    }
    if (!sah(raw.durasi)) return s;
    s.durasi = raw.durasi;
    if ((raw.mulai !== null && !Number.isFinite(raw.mulai)) || !Number.isFinite(raw.basis))
      return s;
    const validLeg = (p) =>
      p &&
      ['kuning', 'jeda', 'jalan'].includes(p.jenis) &&
      [...fase, ''].includes(p.arah) &&
      Number.isFinite(p.start) &&
      Number.isFinite(p.end) &&
      p.end > p.start;
    if (!Array.isArray(raw.lintasan) || !raw.lintasan.every(validLeg)) return s;
    return {
      ...s,
      mulai: raw.mulai,
      basis: raw.basis,
      lintasan: raw.lintasan,
      sisaPejalan: validLeg(raw.sisaPejalan) ? raw.sisaPejalan : null,
    };
  }
  function siklusAuto(d) {
    const seq = [];
    for (const a of arah) {
      const sebelumPejalan = a === 'B';
      seq.push(
        { jenis: 'hijau', arah: a, detik: d.hijau[a], kiri: true },
        { jenis: 'kuning', arah: a, detik: d.kuning, kiri: !sebelumPejalan },
        {
          jenis: 'jeda',
          arah: '',
          detik: sebelumPejalan ? Math.max(4, d.jeda) : d.jeda,
          kiri: !sebelumPejalan,
        },
      );
    }
    seq.push(
      { jenis: 'jalan', arah: 'P', detik: waktuJalan / 1000, kiri: false },
      { jenis: 'jeda', arah: '', detik: d.jeda, kiri: false },
    );
    return seq;
  }
  // Durasi bersifat immutable per snapshot. Gunakan kembali jadwal saat menghitung empat timer.
  const jadwalTersimpan = new WeakMap();
  function jadwalUntuk(durasi) {
    if (!jadwalTersimpan.has(durasi)) {
      const seq = siklusAuto(durasi);
      jadwalTersimpan.set(durasi, {
        seq,
        cycle: seq.reduce((sum, p) => sum + p.detik * 1000, 0),
      });
    }
    return jadwalTersimpan.get(durasi);
  }
  function interval(s, t) {
    if (s.mulai === null) {
      if (s.sisaPejalan && t < s.sisaPejalan.end) return s.sisaPejalan;
      return { jenis: 'stop', arah: '', start: t, end: null, kiri: false };
    }
    const stage = s.lintasan.find((p) => t < p.end);
    if (stage) return { ...stage, transisi: true };
    if (s.mode === 'manual') {
      if (s.pilihan !== 'P')
        return { jenis: 'hijau', arah: s.pilihan, start: s.basis, end: null, kiri: true };
      const start = s.basis + Math.floor(Math.max(0, t - s.basis) / waktuJalan) * waktuJalan;
      return { jenis: 'jalan', arah: 'P', start, end: start + waktuJalan, kiri: false };
    }
    const { seq, cycle } = jadwalUntuk(s.durasi);
    let start = s.basis + Math.floor(Math.max(0, t - s.basis) / cycle) * cycle;
    for (const p of seq) {
      const end = start + p.detik * 1000;
      if (t < end) return { ...p, start, end };
      start = end;
    }
  }
  function lihat(s, t) {
    const ph = interval(s, t),
      aktif = s.mulai !== null;
    const warna = ph.jenis === 'hijau' || ph.jenis === 'kuning' ? ph.jenis : 'merah';
    const warnaJalan = lampuAwal(),
      detikJalan = { U: null, T: null, S: null, B: null };
    const sisa = ph.end === null ? null : Math.max(0, Math.ceil((ph.end - t) / 1000));
    if (arah.includes(ph.arah)) {
      warnaJalan[ph.arah] = warna;
      detikJalan[ph.arah] = sisa;
    }
    // Ikuti jadwal satu kali untuk mencari saat hijau berikutnya pada setiap lampu merah.
    const waiting = new Set(
      aktif
        ? arah.filter(
            (a) => warnaJalan[a] === 'merah' && (s.mode === 'otomatis' || a === s.pilihan),
          )
        : [],
    );
    let current = ph;
    for (let i = 0; waiting.size && current.end !== null && i < 18; i++) {
      const next = interval(s, current.end);
      if (next.jenis === 'hijau' && waiting.delete(next.arah))
        detikJalan[next.arah] = Math.ceil((current.end - t) / 1000);
      current = next;
    }
    return { ...ph, aktif, warna, sisa, warnaJalan, detikJalan, pejalan: ph.jenis === 'jalan' };
  }
  function pindah(s, t, mode, tujuan) {
    const old = interval(s, t);
    const next = { ...s, mode, pilihan: tujuan, lintasan: [], sisaPejalan: null };
    if (s.mulai === null) return { ...next, sisaPejalan: s.sisaPejalan };
    const target = mode === 'otomatis' ? 'U' : tujuan;
    const stages = [];
    let cursor = t;
    function add(jenis, dir, end, start = cursor) {
      if (end <= cursor) return;
      stages.push({ jenis, arah: dir, start, end, kiri: false });
      cursor = end;
    }
    if (old.jenis === 'jalan') {
      if (target === 'P' && mode === 'manual') return { ...next, basis: old.start };
      add('jalan', 'P', old.end, old.start);
    } else if (old.jenis === 'hijau') {
      if (old.arah === target) return { ...next, basis: t };
      add('kuning', old.arah, t + s.durasi.kuning * 1000);
    } else if (old.jenis === 'kuning') {
      add('kuning', old.arah, old.end, old.start);
    }
    const clear = Math.max(s.durasi.jeda, target === 'P' ? 6 : 2) * 1000;
    add('jeda', '', Math.max(cursor + clear, old.jenis === 'jeda' ? old.end : 0));
    return { ...next, basis: cursor, lintasan: stages };
  }
  function ubah(s, aksi, value, t) {
    if (aksi === 'suasana' || aksi === 'kota') {
      const ok =
        aksi === 'suasana'
          ? suasana.includes(value)
          : typeof value === 'string' && Object.hasOwn(kota, value);
      if (!ok) throw Error('Pilihan lingkungan tidak tersedia.');
      return { ...s, lingkungan: { ...s.lingkungan, [aksi]: value } };
    }
    if (aksi === 'hentikan') {
      // Konfirmasi hanya berlaku untuk sesi yang terlihat ketika dialog dibuka.
      if (value != null) {
        if (!Number.isFinite(value.mulai) || value.mulai !== s.mulai)
          throw Error('Sesi simulasi sudah berubah. Buka pengaturan kembali.');
        if (value.mode !== undefined && !modeSah(value.mode)) throw Error('Mode tidak dikenali.');
      }
      const p = interval(s, t);
      const sisaPejalan =
        p.jenis === 'jalan'
          ? { jenis: 'jalan', arah: 'P', start: p.start, end: p.end, kiri: false }
          : null;
      const stopped = { ...s, mulai: null, basis: 0, lintasan: [], sisaPejalan };
      if (value?.mode && value.mode !== s.mode) {
        stopped.mode = value.mode;
        stopped.pilihan = p.arah || s.pilihan;
      }
      return stopped;
    }
    if (aksi === 'mulai') {
      if (s.mulai !== null) return s;
      const stages = [];
      if (s.sisaPejalan && t < s.sisaPejalan.end)
        stages.push(s.sisaPejalan, {
          jenis: 'jeda',
          arah: '',
          start: s.sisaPejalan.end,
          end: s.sisaPejalan.end + s.durasi.jeda * 1000,
          kiri: false,
        });
      return {
        ...s,
        mulai: t,
        basis: stages.at(-1)?.end || t,
        lintasan: stages,
        sisaPejalan: null,
      };
    }
    if (aksi === 'simpan') {
      if (s.mulai !== null) throw Error('Hentikan simulasi sebelum mengubah durasi.');
      if (!sah(value)) throw Error('Periksa durasi setiap jalan.');
      return {
        ...s,
        durasi: {
          hijau: Object.fromEntries(arah.map((a) => [a, value.hijau[a]])),
          kuning: value.kuning,
          jeda: value.jeda,
        },
      };
    }
    if (aksi === 'mode') {
      if (!modeSah(value)) throw Error('Mode tidak dikenali.');
      if (value === s.mode) return s;
      if (s.mulai !== null) throw Error('Hentikan simulasi sebelum mengganti mode.');
      return pindah(s, t, value, interval(s, t).arah || s.pilihan);
    }
    if (aksi === 'fase') {
      if (s.mulai !== null && t < s.basis) throw Error('Tunggu fase pengaman selesai.');
      if (s.mode !== 'manual' || !fase.includes(value))
        throw Error('Pilih satu jalan pada mode manual.');
      return value === s.pilihan ? s : pindah(s, t, 'manual', value);
    }
    throw Error('Perintah tidak dikenali.');
  }
  return { awal, standar, batas, sah, restore, siklusAuto, interval, ubah, lihat };
})();
if (typeof module === 'object' && module.exports) module.exports = Siklus;
