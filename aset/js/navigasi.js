/** Navigasi, dialog denah, dan transisi dokumen. Tidak mengubah perilaku tautan eksternal/tab baru. */
(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const menu = document.querySelector('#menu-button'),
    nav = document.querySelector('#menu-panel');
  const mobile = matchMedia('(max-width:680px)'),
    reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function toggle(open) {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    menu.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
    nav.classList.toggle('open', open);
    nav.inert = mobile.matches && !open;
  }
  toggle(false);
  menu.addEventListener('click', () => toggle(menu.getAttribute('aria-expanded') !== 'true'));
  mobile.addEventListener('change', () => toggle(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      toggle(false);
      menu.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrap')) toggle(false);
  });

  const native =
    'CSSViewTransitionRule' in window &&
    'onpageswap' in window &&
    location.protocol !== 'file:';
  const key = 'simpang.menu.masuk';
  let leaving = false;
  try {
    if (!native && !reduced.matches && sessionStorage.getItem(key) === location.pathname)
      root.classList.add('menu-masuk');
    sessionStorage.removeItem(key);
  } catch {}
  window.addEventListener('pageshow', () => {
    leaving = false;
    root.classList.remove('menu-keluar');
  });
  document.addEventListener('click', (event) => {
    const a = event.target.closest('a[href]');
    if (
      !a ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.shiftKey ||
      a.hasAttribute('download') ||
      (a.target && a.target !== '_self')
    )
      return;
    const target = new URL(a.href, location.href),
      pages = ['index.html', 'simulator.html', 'hmi.html'];
    const page = target.pathname.split('/').pop() || 'index.html';
    if (target.origin !== location.origin || !pages.includes(page)) return;
    if (
      document.body.dataset.page === 'beranda' &&
      page === 'index.html' &&
      target.hash === '#beranda'
    ) {
      event.preventDefault();
      toggle(false);
      window.scrollTo({ top: 0, behavior: reduced.matches ? 'instant' : 'smooth' });
      if (mobile.matches && a.closest('nav')) menu.focus();
      return;
    }
    if (target.pathname === location.pathname || native || reduced.matches) return;
    event.preventDefault();
    if (leaving) return;
    leaving = true;
    root.classList.remove('menu-masuk');
    root.classList.add('menu-keluar');
    try {
      sessionStorage.setItem(key, target.pathname);
    } catch {}
    setTimeout(() => location.assign(target.href), 135);
  });
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            observer.unobserve(e.target);
          }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
})();
