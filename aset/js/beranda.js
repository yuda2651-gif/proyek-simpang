(() => {
  const $ = (selector) => document.querySelector(selector);
  const env = lingkunganSimpang(),
    draw = denahSimpang();
  const demo = Siklus.awal();
  demo.mulai = demo.basis = Date.now();
  let snap = { state: null, link: '', hasSession: false },
    paused = false,
    last = '';
  let hub;
  hub = hubSimpang((value) => {
    snap = value;
  });
  const read = $('#fase'),
    clockLabel = $('#waktu'),
    peek = $('#home-label'),
    miniTime = $('#mini-time');
  const mini = document.querySelectorAll('[data-mini]');
  const names = DataSimpang.jalan;
  let timing = null,
    phase = null,
    lastTime = -Infinity;
  function render(frame, visible = AtlasKampung.visible) {
    const wall = hub.now();
    env(snap.state?.lingkungan || demo.lingkungan, wall);
    const demoMode =
      !snap.hasSession &&
      document.querySelector('meta[name="simpang-mode"]').content !== 'server';
    const state = demoMode ? demo : snap.state;
    if (state !== timing || wall - lastTime >= 95 || (phase?.end && wall >= phase.end)) {
      timing = state;
      lastTime = wall;
      phase = state ? Siklus.lihat(state, wall) : null;
    }
    if (!paused && visible) draw(state, phase, frame, wall, !AtlasKampung.busy);
    const title = paused
      ? 'Tampilan dijeda'
      : !phase
        ? 'Koneksi terputus'
        : phase.pejalan
          ? 'Giliran penyeberang'
          : phase.arah
            ? names[phase.arah].arah + ' ' + phase.warna
            : 'Semua merah';
    const sec =
      phase?.sisa != null
        ? String(phase.sisa).padStart(2, '0') + ' dtk'
        : phase?.aktif && phase.jenis === 'hijau'
          ? 'Manual'
          : '—';
    const tag = demoMode ? 'Pratinjau lokal' : snap.state ? 'Pantauan simpang' : snap.link;
    const key = [title, sec, tag, paused].join('/');
    if (key !== last) {
      last = key;
      read.textContent = title;
      peek.textContent = tag;
      if (!paused) {
        clockLabel.textContent = miniTime.textContent = sec;
        $('#phase-dot').style.backgroundColor =
          'var(' +
          ({ merah: '--sign-red', kuning: '--sign-ochre', hijau: '--green-dot' }[
            phase?.warna
          ] || '--strong-line') +
          ')';
        for (const strip of mini)
          strip.dataset.aktif = phase?.warnaJalan[strip.dataset.mini] || '';
      }
    }
  }
  for (const button of document.querySelectorAll('.motion-control'))
    button.addEventListener('click', () => {
      paused = !paused;
      document.documentElement.dataset.tampilanJeda = paused ? 'ya' : 'tidak';
      for (const b of document.querySelectorAll('.motion-control')) {
        b.title = paused ? 'Lanjutkan tampilan' : 'Jeda tampilan';
        b.setAttribute('aria-label', b.title);
        b.querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause');
      }
      render(performance.now());
    });
  jadwalGambar(
    render,
    () => !paused && (!snap.hasSession || snap.state?.mulai != null || phase?.pejalan),
  );
})();
