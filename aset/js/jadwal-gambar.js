/** Animasi yang berada di luar layar berhenti menggambar; jam fase tetap berasal dari pengendali. */
function jadwalGambar(render, bergerak) {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)');
  let frame = 0,
    timer = 0,
    last = 0,
    stopped = false;
  function schedule() {
    if (stopped || document.hidden) return;
    if (AtlasKampung.visible && !AtlasKampung.busy && bergerak() && !reduce.matches)
      frame = requestAnimationFrame(tick);
    else
      timer = setTimeout(() => {
        frame = requestAnimationFrame(tick);
      }, AtlasKampung.busy ? 100 : 210);
  }
  function tick(now) {
    // Ambang 10 ms mengikuti laju layar (60/90/120/144 Hz) dan membatasi layar >144 Hz.
    if (now - last >= 10 || !last) {
      last = now;
      render(now, AtlasKampung.visible);
    }
    schedule();
  }
  function refresh() {
    cancelAnimationFrame(frame);
    clearTimeout(timer);
    last = 0;
    if (!document.hidden && !stopped) tick(performance.now());
  }
  document.addEventListener('visibilitychange', refresh);
  reduce.addEventListener('change', refresh);
  window.addEventListener('pageshow', refresh);
  window.addEventListener('pagehide', (e) => {
    cancelAnimationFrame(frame);
    clearTimeout(timer);
    if (!e.persisted) stopped = true;
  });
  refresh();
  return refresh;
}
