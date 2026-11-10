/** Pustaka ikon SVG untuk navigasi, cuaca, dan kendali. */
document.getElementById('svg-defs').insertAdjacentHTML(
  'beforeend',
  `
<symbol id="i-menu" viewBox="0 0 24 24">
    <path d="M3 6h18M3 12h18M3 18h18"/>
  </symbol>
<symbol id="i-close" viewBox="0 0 24 24">
    <path d="m5 5 14 14M19 5 5 19"/>
  </symbol>
<symbol id="i-arrow" viewBox="0 0 24 24">
    <path d="M3 12h17m-7-7 7 7-7 7"/>
  </symbol>
<symbol id="i-diagonal" viewBox="0 0 24 24">
    <path d="M5 19 19 5M7 5h12v12"/>
  </symbol>
<symbol id="i-panel" viewBox="0 0 24 24">
    <path d="M3 7h18M3 17h18M8 4v6m8 4v6"/>
  </symbol>
<symbol id="i-map" viewBox="0 0 24 24">
    <path d="m3 5 6-2 6 2 6-2v15l-6 3-6-3-6 3zM9 3v15m6-13v16"/>
  </symbol>
<symbol id="i-expand" viewBox="0 0 24 24">
    <path d="M9 3H3v6m12-6h6v6m0 6v6h-6M3 15v6h6"/>
  </symbol>
<symbol id="i-pause" viewBox="0 0 24 24">
    <path d="M8 5v14M16 5v14"/>
  </symbol>
<symbol id="i-play" viewBox="0 0 24 24">
    <path d="m7 4 12 8-12 8z"/>
  </symbol>
<symbol id="i-globe" viewBox="0 0 24 24">
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c-6 4-6 14 0 18 6-4 6-14 0-18Z"/>
  </symbol>
<symbol id="i-cloud" viewBox="0 0 24 24">
    <path d="M6.5 18h11a3.9 3.9 0 0 0 .5-7.8A6 6 0 0 0 6.4 9a4.5 4.5 0 0 0 .1 9Z"/>
  </symbol>
<symbol id="i-repo" viewBox="0 0 24 24">
    <path d="M6 9v7m12-8c0 4-3 5-7 5H6m2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
  </symbol>
<symbol id="i-server" viewBox="0 0 24 24">
    <path d="M3 4h18v7H3zM3 14h18v6H3zM6 7.5h2m-2 9.5h2"/>
  </symbol>
<symbol id="i-screens" viewBox="0 0 24 24">
    <path d="M2 4h15v11H2zM9.5 15v4M6 19h7M18 9h4v10h-6v-3"/>
  </symbol>
<symbol id="brand" viewBox="0 0 36 36">
    <rect width="36" height="36" rx="9" fill="var(--accent-deep)"/>
    <g fill="none" stroke="var(--paper)" stroke-width="2.25" stroke-linecap="round">
      <path d="M8 14h3a4 4 0 0 0 4-4V6m7 0v5a4 4 0 0 0 4 4h3m0 7h-4a4 4 0 0 0-4 4v4m-7 0v-5a4 4 0 0 0-4-4H7"/>
    </g>
    <circle cx="18" cy="18" r="1.5" fill="var(--sage)"/>
  </symbol>
<symbol id="i-sun" viewBox="0 0 24 24">
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>
  </symbol>
<symbol id="i-sunrise" viewBox="0 0 24 24">
    <path d="M3 16h18M5 20h14M8 16a4 4 0 1 1 8 0M12 3v6m-3-3 3-3 3 3M4 10l2 2m14-2-2 2"/>
  </symbol>
<symbol id="i-sunset" viewBox="0 0 24 24">
    <path d="M2 17h20M5 21h14M7 17a5 5 0 1 1 10 0M12 2v6m-3-3 3 3 3-3M3 11l2 2m16-2-2 2"/>
  </symbol>
<symbol id="i-cloud-sun" viewBox="0 0 24 24">
    <path d="M7 11a4 4 0 1 1 7-2m-6-7 1 2M3 7h2M6 3l1.5 1.5M7 19h11a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.4-.5A4 4 0 1 0 7 19Z"/>
  </symbol>
<symbol id="i-moon" viewBox="0 0 24 24">
    <path d="M19 15A8 8 0 0 1 9 5a8 8 0 1 0 10 10Z"/>
  </symbol>
<symbol id="i-rain" viewBox="0 0 24 24">
    <path d="M5 14h13a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.5-.8A4 4 0 1 0 5 14ZM8 17l-2 4m7-4-2 4m7-4-2 4"/>
  </symbol>
<symbol id="i-mist" viewBox="0 0 24 24">
    <path d="M4 11h15a3 3 0 0 0 0-6 4.5 4.5 0 0 0-8.5-.5A4 4 0 1 0 4 11ZM3 15h13m-9 4h14"/>
  </symbol>
<symbol id="i-storm" viewBox="0 0 24 24">
    <path d="M4 14h14a3.7 3.7 0 0 0 0-7.4A5 5 0 0 0 8.5 6 4 4 0 1 0 4 14ZM13 12l-3 5h4l-3 5"/>
  </symbol>
<symbol id="i-auto" viewBox="0 0 24 24">
    <path d="M4 9a8 8 0 0 1 14-3l2 2m0-5v5h-5M20 15a8 8 0 0 1-14 3l-2-2m0 5v-5h5"/>
  </symbol>
<symbol id="i-manual" viewBox="0 0 24 24">
    <path d="M3 7h7m5 0h6m-18 10h12m4 0h2M10 4v6h5V4zM15 14v6h4v-6z"/>
  </symbol>
<symbol id="i-walk" viewBox="0 0 24 24">
    <path d="M15 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5 12l4-3 4-1 2 4 4 1M12 9l-2 6 4 3 1 4m-5-7-2 4-3 2"/>
  </symbol>
<symbol id="i-clock" viewBox="0 0 24 24">
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 6v6l4 2"/>
  </symbol>
<symbol id="i-ns" viewBox="0 0 24 24">
    <path d="M8 19V4m-4 4 4-4 4 4m4-3v15m-4-4 4 4 4-4"/>
  </symbol>
<symbol id="i-ew" viewBox="0 0 24 24">
    <path d="M19 8H4m4-4-4 4 4 4m-3 4h15m-4-4 4 4-4 4"/>
  </symbol>
<symbol id="i-left" viewBox="0 0 24 24">
    <path d="M19 20v-6a5 5 0 0 0-5-5H5m5-5L5 9l5 5"/>
  </symbol>
<symbol id="i-right" viewBox="0 0 24 24">
    <path d="M5 20v-6a5 5 0 0 1 5-5h9m-5-5 5 5-5 5"/>
  </symbol>
<symbol id="i-stop" viewBox="0 0 24 24">
    <path d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>
  </symbol>
`,
);
