(() => {
  const $ = (selector) => document.querySelector(selector);
  const operator = document.body.dataset.page === 'hmi';
  const paintScene = operator ? null : denahSimpang(),
    paintSky = lingkunganSimpang();
  const phaseName = $('#phase-label'),
    count = $('#count'),
    conn = $('#connection'),
    stateDot = $('#state-dot'),
    runText = $('#run-state');
  const rows = [...document.querySelectorAll('[data-lane]')];
  const road = (dir) => DataSimpang.jalan[dir];
  const empty = Siklus.awal();
  const lampBank = document.querySelectorAll('[data-output]');
  const text = (el, value) => {
    if (el && el.textContent !== value) el.textContent = value;
  };
  const phaseKeys = [...document.querySelectorAll('[data-fase]')],
    skyKeys = [...document.querySelectorAll('[data-sky-choice]')];
  let snap = { state: null, link: 'Menghubungkan…', locked: false },
    hub,
    pending = false,
    last = '',
    lastUi = '';
  const peta = pemilihJalan(send, () => ({
    ...snap,
    pending,
    now: hub ? hub.now() : Date.now(),
  }));
  const wilayah = operator ? pilihanCuaca(send) : null;
  const pengaturan = operator ? pengaturanHmi(send, () => snap) : null;
  function controls(wall) {
    if (!operator) return;
    const { state: s, locked } = snap,
      running = s?.mulai != null,
      disabled = !s || locked || pending;
    const changing = running && wall < s.basis,
      manual = s?.mode === 'manual';
    const sig = JSON.stringify([
      disabled,
      locked,
      snap.unlocking,
      snap.rejected,
      running,
      s?.mulai,
      changing,
      s?.durasi,
      s?.mode,
      s?.pilihan,
      s?.lingkungan,
    ]);
    if (sig === lastUi) return;
    lastUi = sig;
    $('#start').disabled = disabled || running;
    $('#stop').disabled = disabled || !running;
    pengaturan(s, disabled);
    // Selama kode tersimpan sedang dicoba, form tidak perlu tampil sekilas.
    $('#unlock').hidden = !(s && locked && !snap.unlocking);
    if (s && locked && snap.rejected && !$('#login-status').textContent)
      text($('#login-status'), 'Kode sebelumnya sudah tidak berlaku. Masukkan kode terbaru.');
    $('#auth-button').disabled = pending;
    text($('#mode-label'), manual ? 'Mode manual' : 'Mode otomatis');
    $('#mode-icon').setAttribute('href', manual ? '#i-manual' : '#i-auto');
    $('#manual-pad').hidden = !manual;
    for (const b of phaseKeys) {
      b.disabled = disabled || changing;
      b.setAttribute('aria-pressed', String(b.dataset.fase === s?.pilihan));
    }
    text(
      $('#mode-copy'),
      manual
        ? 'Ketuk satu lengan pada denah atau pilih nama jalan. Jalur itu mendapat giliran sampai kamu menggantinya.'
        : 'Satu jalan mendapat hijau setiap giliran. Setelah Barat, semua kendaraan memberi jalan kepada penyeberang.',
    );
    text(
      $('#transition-note'),
      changing
        ? 'Menunggu fase pengaman selesai.'
        : manual && !running
          ? 'Pilih giliran awal, lalu tekan Mulai.'
          : '',
    );
    for (const b of skyKeys) {
      b.disabled = disabled;
      b.setAttribute(
        'aria-pressed',
        String(b.dataset.skyChoice === (s?.lingkungan.suasana || 'wib')),
      );
    }
    wilayah(s?.lingkungan.kota || 'Jakarta', disabled);
  }
  function sequence(s, ph, wall) {
    if (!operator) return;
    const seq = Siklus.siklusAuto(s?.durasi || empty.durasi),
      total = seq.reduce((n, e) => n + e.detik, 0);
    const track = $('.phase-track');
    track.style.gridTemplateColumns = seq.map((e) => e.detik + 'fr').join(' ');
    let index = -1,
      rem = s ? (Math.max(0, wall - s.basis) / 1000) % total : 0;
    if (ph?.aktif && s.mode === 'otomatis' && !ph.transisi) {
      index = 0;
      while (index < seq.length - 1 && rem >= seq[index].detik) {
        rem -= seq[index].detik;
        index++;
      }
    }
    track.hidden = s?.mode === 'manual';
    [...track.children].forEach((e, i) => e.classList.toggle('current', index === i));
    text($('#seq-meta'), s?.mode === 'manual' ? 'Pilihan operator' : total + ' detik / siklus');
    text(
      $('#seq-text'),
      !s
        ? 'Menunggu kondisi simpang.'
        : s.mode === 'manual'
          ? ph?.transisi
            ? 'Menuju ' + (road(s.pilihan)?.arah || 'Penyeberang') + '.'
            : 'Giliran terpilih: ' + (road(s.pilihan)?.arah || 'Penyeberang') + '.'
          : 'Utara → Timur → Selatan → Barat → Penyeberang',
    );
  }
  let cachedState = null,
    cachedPhase = null,
    lastUI = -Infinity;
  function render(frame, visible = operator || AtlasKampung.visible) {
    const s = snap.state,
      wall = hub ? hub.now() : Date.now();
    // Fase dan kontrol cukup dihitung saat ada data baru, pergantian fase, atau tik antarmuka.
    if (
      s === cachedState &&
      frame - lastUI >= 0 &&
      frame - lastUI < 95 &&
      (!cachedPhase?.end || wall < cachedPhase.end)
    ) {
      if (paintScene && visible)
        paintScene(s, cachedPhase, frame, wall, !AtlasKampung.busy);
      return;
    }
    cachedState = s;
    lastUI = frame;
    const ph = s ? Siklus.lihat(s, wall) : null;
    cachedPhase = ph;
    paintSky(s?.lingkungan || empty.lingkungan, wall);
    controls(wall);
    peta.lihat(s, ph, wall);
    const stamp = [
      snap.link,
      s?.mode,
      ph?.jenis,
      ph?.arah,
      ph?.sisa,
      ph?.aktif,
      s?.pilihan,
      ph?.transisi,
      ph?.kiri,
      JSON.stringify(s?.durasi),
    ].join('/');
    if (stamp !== last) {
      last = stamp;
      text(conn, snap.link);
      conn.dataset.ok = String(!!s);
      text(runText, !ph ? 'Menunggu data' : ph.aktif ? 'Berjalan' : 'Berhenti');
      let title = 'Status belum tersedia';
      if (ph)
        title = ph.pejalan
          ? 'Giliran penyeberang'
          : ph.arah
            ? road(ph.arah).arah + ' ' + ph.warna
            : 'Semua merah';
      text(phaseName, title);
      text(
        $('#active-roads'),
        (ph?.pejalan ? 'Keempat zebra cross' : road(ph?.arah)?.nama) ||
          (ph?.aktif ? 'Jeda antarfase' : ''),
      );
      const held = ph?.aktif && ph.jenis === 'hijau' && ph.end == null;
      text(count, ph?.sisa != null ? String(ph.sisa).padStart(2, '0') : held ? '∞' : '—');
      text($('#unit-count'), held ? 'ditahan operator' : operator ? 'detik' : 'detik tersisa');
      if (stateDot) stateDot.dataset.color = ph?.warna || '';
      for (const row of rows) {
        const color = ph?.warnaJalan[row.dataset.lane] || '';
        row.dataset.warna = color;
        text(
          row.querySelector('.lane-color'),
          color ? color[0].toUpperCase() + color.slice(1) : '—',
        );
      }
      for (const unit of lampBank) {
        const g = unit.dataset.output,
          c = ph?.warnaJalan[g] || '';
        unit.dataset.color = c;
        const v = ph?.detikJalan[g];
        text(
          unit.querySelector('small'),
          c ? c[0].toUpperCase() + c.slice(1) + (v == null ? '' : ' · ' + v + ' dtk') : '—',
        );
      }
      text(
        $('#ped-state'),
        !ph
          ? ''
          : ph.pejalan
            ? 'Penyeberang melintas · lajur kiri menunggu'
            : ph.aktif
              ? ph.kiri
                ? 'Jalur kiri terbuka · penyeberang menunggu'
                : 'Jalur kiri ditahan sebelum penyeberangan'
              : 'Seluruh kendaraan berhenti',
      );
      sequence(s, ph, wall);
    }
    if (paintScene && visible) paintScene(s, ph, frame, wall, !AtlasKampung.busy);
  }
  hub = hubSimpang((value) => {
    snap = value;
    if (hub) {
      lastUI = -Infinity;
      render(performance.now());
    }
  });
  render(performance.now());
  if (paintScene) jadwalGambar(render, () => snap.state?.mulai != null || cachedPhase?.pejalan);
  else
    setInterval(() => {
      if (!document.hidden) render(performance.now());
    }, 150);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) render(performance.now());
  });
  const notice = $('#notice'),
    login = $('#login-status');
  async function send(action, data, target = notice) {
    if (pending) return false;
    pending = true;
    controls(hub.now());
    text(target, '');
    try {
      await hub.command(action, data);
      const feedback = {
        mulai: 'Simulasi dimulai.',
        hentikan: 'Semua lampu kendaraan merah.',
        simpan: 'Durasi tersimpan.',
        buka: 'Panel terbuka.',
        mode: 'Mode kendali diperbarui.',
        fase: 'Giliran dipilih.',
        suasana: 'Pencahayaan diperbarui.',
        kota: 'Lokasi cuaca diperbarui.',
      };
      text(target, feedback[action]);
      if (action === 'buka') {
        $('#code').value = '';
        text(notice, 'Panel terbuka.');
      }
      return true;
    } catch (error) {
      text(target, error.message);
      return false;
    } finally {
      pending = false;
      lastUi = '';
      lastUI = -Infinity;
      render(performance.now());
    }
  }
  if (operator) {
    $('#start').addEventListener('click', () => send('mulai'));
    $('#stop').addEventListener('click', () => send('hentikan'));
    $('#unlock').addEventListener('submit', (e) => {
      e.preventDefault();
      send('buka', $('#code').value.trim(), login);
    });
    for (const b of phaseKeys)
      b.addEventListener('click', () => {
        peta.ikuti();
        send('fase', b.dataset.fase);
      });
    for (const b of skyKeys)
      b.addEventListener('click', () => send('suasana', b.dataset.skyChoice));
  }
})();
