/** Satu konfirmasi untuk memilih mode atau membuka kolom durasi saat simpang berjalan. */
function pengaturanHmi(kirim, kondisi) {
  const byId = (id) => document.getElementById(id);
  const dialog = byId('stop-dialog');
  const batal = byId('cancel-stop');
  const setuju = byId('confirm-stop');
  const pesan = byId('stop-error');
  const form = byId('settings');
  const bidang = byId('timings');
  const lipatan = form.closest('details');
  const simpan = byId('save-timings');
  const modeKeys = [...document.querySelectorAll('[data-mode]')];
  const kolom = [...bidang.querySelectorAll('input')].map((input) => {
    const kotak = input.closest('.durasi-item, .setting-row');
    const nama = input.labels[0].textContent.trim();
    const tombol = document.createElement('button');
    tombol.type = 'button';
    tombol.className = 'buka-durasi';
    tombol.hidden = true;
    tombol.setAttribute('aria-haspopup', 'dialog');
    tombol.setAttribute('aria-controls', dialog.id);
    tombol.addEventListener('click', () => minta(input));
    kotak.append(tombol);
    return { input, nama, tombol };
  });
  let permintaan = null;
  let menunggu = false;
  let konfigurasi = '';
  let tadiBerjalan = false;

  function minta(tujuan) {
    const { state, locked } = kondisi();
    if (dialog.open || !state || locked || state.mulai === null) return;
    const mode = tujuan.dataset.mode;
    const namaMode = tujuan.textContent.trim();
    const namaFase = tujuan.labels?.[0]?.textContent.trim();
    const alasan = mode
      ? mode === state.mode
        ? 'Mode ' + namaMode + ' sedang berjalan. Hentikan simulasi untuk mengatur mode kendali.'
        : 'Semua lampu kendaraan akan merah, lalu mode ' + namaMode + ' akan dipilih.'
      : 'Semua lampu kendaraan akan merah. Setelah itu kamu bisa mengubah durasi ' +
        namaFase.toLocaleLowerCase('id-ID') + '.';
    byId('stop-reason').textContent = alasan + ' Tekan Mulai saat siap menjalankan simulasi lagi.';
    permintaan = { mulai: state.mulai, tujuan, mode };
    pesan.textContent = '';
    setuju.disabled = batal.disabled = false;
    dialog.showModal();
    batal.focus({ preventScroll: true });
  }

  function perbaruiDialog(state, terkunci) {
    if (!dialog.open || menunggu || !permintaan) return;
    const alasan = !state || terkunci
      ? 'Kendali tidak tersedia. Periksa koneksi atau kode operator.'
      : state.mulai !== permintaan.mulai
        ? 'Status simulasi sudah berubah dari panel lain. Tutup dialog untuk melihat kondisi terbaru.'
        : '';
    setuju.disabled = !!alasan;
    pesan.textContent = alasan;
  }
  batal.addEventListener('click', () => dialog.close());
  dialog.addEventListener('cancel', (event) => {
    if (menunggu) event.preventDefault();
  });
  dialog.addEventListener('close', () => {
    if (!dialog.open) permintaan = null;
  });
  setuju.addEventListener('click', async () => {
    if (!permintaan || menunggu || setuju.disabled) return;
    const { mulai, mode, tujuan } = permintaan;
    menunggu = setuju.disabled = batal.disabled = true;
    const ok = await kirim('hentikan', { mulai, mode }, pesan);
    menunggu = batal.disabled = false;
    if (!ok) {
      const galat = pesan.textContent;
      const { state, locked } = kondisi();
      perbaruiDialog(state, locked);
      if (!pesan.textContent) pesan.textContent = galat;
      (setuju.disabled ? batal : setuju).focus();
      return;
    }
    dialog.close();
    if (!mode) lipatan.open = true;
    byId('notice').textContent = mode
      ? 'Simulasi berhenti. Mode ' + tujuan.textContent.trim() + ' siap digunakan.'
      : 'Simulasi berhenti. Ubah waktunya, lalu pilih Simpan durasi.';
    tujuan.focus();
  });

  for (const tombol of modeKeys) {
    tombol.addEventListener('click', () => {
      const { state } = kondisi();
      if (!state) return;
      if (state.mulai !== null) minta(tombol);
      else if (tombol.dataset.mode !== state.mode) kirim('mode', tombol.dataset.mode);
    });
  }
  lipatan.querySelector('summary').addEventListener('click', (event) => {
    if (kondisi().state?.mulai != null && !bidang.disabled) {
      event.preventDefault();
      minta(kolom[0].input);
    }
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (bidang.disabled) return;
    if (kondisi().state?.mulai != null) return minta(kolom[0].input);
    const durasi = {
      hijau: Object.fromEntries(DataSimpang.arah.map((a) => [a, byId('hijau-' + a).valueAsNumber])),
      kuning: byId('kuning').valueAsNumber,
      jeda: byId('jeda').valueAsNumber,
    };
    if (form.reportValidity() && Siklus.sah(durasi)) kirim('simpan', durasi);
  });

  return (state, disabled) => {
    const berjalan = state?.mulai != null;
    bidang.disabled = disabled;
    const cfg = state ? JSON.stringify(state.durasi) : '';
    const isiUlang = cfg && (cfg !== konfigurasi || (berjalan && !tadiBerjalan));
    for (const { input, nama, tombol } of kolom) {
      if (isiUlang) {
        const arah = input.dataset.hijau;
        input.value = arah ? state.durasi.hijau[arah] : state.durasi[input.id];
      }
      input.disabled = berjalan;
      tombol.hidden = !berjalan;
      if (berjalan) tombol.setAttribute('aria-label', 'Ubah durasi ' + nama + ', ' + input.value + ' detik');
    }
    konfigurasi = cfg;
    tadiBerjalan = berjalan;
    simpan.textContent = berjalan ? 'Ubah durasi' : 'Simpan durasi';
    byId('setting-note').textContent = berjalan
      ? 'Klik salah satu durasi untuk menghentikan simulasi dan mengubah waktunya.'
      : 'Nilai dalam detik untuk siklus berikutnya.';
    for (const tombol of modeKeys) {
      tombol.disabled = disabled;
      tombol.setAttribute('aria-pressed', String(tombol.dataset.mode === (state?.mode || 'otomatis')));
      if (berjalan) tombol.setAttribute('aria-haspopup', 'dialog');
      else tombol.removeAttribute('aria-haspopup');
    }
    perbaruiDialog(state, kondisi().locked);
  };
}
