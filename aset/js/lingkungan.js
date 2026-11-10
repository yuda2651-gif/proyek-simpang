// Jam selalu WIB. Prasetel mengubah pencahayaan; cuaca berasal dari kota yang dipilih.
function lingkunganSimpang() {
  const fromServer = document.querySelector('meta[name="simpang-mode"]')?.content === 'server';
  const clock = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });
  const day = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });
  const shortTime = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });
  const elements = {};
  for (const key of ['clock', 'date', 'temp', 'weather', 'update', 'city', 'sky', 'where'])
    elements[key] = document.querySelectorAll('[data-env="' + key + '"]');
  const symbols = document.querySelectorAll('[data-weather-icon]'),
    skySymbols = document.querySelectorAll('[data-sky-icon]');
  const write = (key, value) => {
    for (const el of elements[key]) if (el.textContent !== value) el.textContent = value;
  };
  function description(code) {
    if (code === 0) return ['Cerah', 'cerah', 'sun'];
    if (code === 1 || code === 2) return ['Cerah berawan', 'berawan', 'cloud-sun'];
    if (code === 3) return ['Berawan', 'berawan', 'cloud'];
    if ([45, 48].includes(code)) return ['Berkabut', 'kabut', 'mist'];
    if ([51, 53, 55, 56, 57].includes(code)) return ['Gerimis', 'hujan', 'rain'];
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return ['Hujan', 'hujan', 'rain'];
    if ([95, 96, 99].includes(code)) return ['Hujan petir', 'hujan', 'storm'];
    if ([71, 73, 75, 77, 85, 86].includes(code)) return ['Salju', 'berawan', 'cloud'];
    return ['Kondisi lain', 'netral', 'cloud'];
  }
  let city = '',
    lastSecond = '',
    active = null,
    fetched = 0,
    sample = null,
    status = '',
    lastDraw = '';
  const key = () => 'simpang.cuaca.v2.' + city;
  const interval = 15 * 60 * 1000,
    expiry = 90 * 60 * 1000;
  function valid(s) {
    return (
      s &&
      Number.isFinite(s.temp) &&
      Number.isInteger(s.code) &&
      Number.isFinite(s.at) &&
      Number.isFinite(s.saved)
    );
  }
  function cached() {
    try {
      const r = JSON.parse(localStorage.getItem(key()));
      return valid(r) ? r : null;
    } catch {
      return null;
    }
  }
  function paint() {
    const available =
      valid(sample) && Date.now() - sample.at < expiry && sample.at < Date.now() + interval;
    const d = available
      ? description(sample.code)
      : ['Cuaca belum tersedia', 'netral', 'cloud'];
    const actual = document.documentElement.dataset.sky;
    const icon = d[2] === 'sun' && actual === 'malam' ? 'moon' : d[2];
    const view = [city, available, sample?.at, status, icon].join('/');
    if (view === lastDraw) return;
    lastDraw = view;
    document.documentElement.dataset.cuaca = d[1];
    for (const use of symbols) use.setAttribute('href', '#i-' + icon);
    write('city', DataSimpang.kota[city].label);
    write('temp', available ? Math.round(sample.temp) + '°' : '—');
    write(
      'weather',
      available ? d[0] : status === 'loading' ? 'Memuat cuaca…' : 'Cuaca belum tersedia',
    );
    write(
      'update',
      available
        ? (status === 'offline' ? 'Data tersimpan · ' : 'Data cuaca · ') +
            shortTime.format(sample.at) +
            ' WIB'
        : status === 'loading'
          ? 'Menghubungi Open-Meteo'
          : valid(sample) && status !== 'offline'
            ? 'Data cuaca belum mutakhir'
            : 'Periksa koneksi internet',
    );
  }
  async function loadReading(url, parent, ms) {
    const local = new AbortController();
    const abort = () => local.abort();
    if (parent.aborted) throw Error('dibatalkan');
    parent.addEventListener('abort', abort, { once: true });
    const timer = setTimeout(abort, ms);
    try {
      const response = await fetch(url, { signal: local.signal, cache: 'no-store' });
      if (!response.ok) throw Error('Cuaca tidak tersedia.');
      return await response.json();
    } finally {
      clearTimeout(timer);
      parent.removeEventListener('abort', abort);
    }
  }
  async function fetchWeather() {
    if (!city || active) return;
    const selected = city,
      controller = new AbortController();
    active = controller;

    fetched = Date.now();
    status = 'loading';
    paint();
    try {
      const coords = DataSimpang.kota[selected].koordinat;
      const params = new URLSearchParams({
        latitude: coords[0],
        longitude: coords[1],
        current: 'temperature_2m,weather_code',
        timeformat: 'unixtime',
        timezone: 'Asia/Jakarta',
      });
      let payload = null;
      if (fromServer) {
        try {
          payload = await loadReading(
            '/api/cuaca?kota=' + encodeURIComponent(selected),
            controller.signal,
            23000,
          );
        } catch {
          if (controller.signal.aborted) throw Error('dibatalkan');
        }
      }
      if (!payload)
        payload = await loadReading(
          'https://api.open-meteo.com/v1/forecast?' + params,
          controller.signal,
          24000,
        );
      const { current } = payload;
      const r = {
        temp: current.temperature_2m,
        code: current.weather_code,
        at: current.time * 1000,
        saved: Date.now(),
        cached: !!payload.cached,
      };
      if (!valid(r)) throw Error('data');
      if (selected !== city || active !== controller) return;
      sample = r;
      status = payload.cached ? 'offline' : 'ok';
      try {
        localStorage.setItem(key(), JSON.stringify(r));
      } catch {}
    } catch {
      if (selected === city && active === controller) status = 'offline';
    } finally {
      if (active === controller) {
        active = null;
        paint();
      }
    }
  }
  function setCity(value) {
    if (active) active.abort();
    active = null;
    city = value;
    sample = cached();
    lastDraw = '';
    fetched = sample?.saved || 0;
    status = sample?.cached || navigator.onLine === false ? 'offline' : 'ok';
    paint();
  }
  window.addEventListener('offline', () => {
    status = 'offline';
    paint();
  });
  window.addEventListener('online', () => {
    fetched = 0;
  });
  window.addEventListener('storage', (e) => {
    if (e.key === key()) {
      const fresh = cached();
      if (fresh && (!sample || fresh.saved > sample.saved)) {
        sample = fresh;
        fetched = fresh.saved;
        status = fresh.cached || navigator.onLine === false ? 'offline' : 'ok';
        paint();
      }
    }
  });
  return (prefs, epoch) => {
    const bucket = Math.floor(epoch / 1000),
      stamp = [bucket, prefs.kota, prefs.suasana].join('/');
    if (lastSecond === stamp) return;
    lastSecond = stamp;
    const time = clock.format(epoch),
      hour = Number(time.slice(0, 2));
    const sky = Pencahayaan.suasana(hour, prefs.suasana);
    if (document.documentElement.dataset.sky !== sky)
      document.documentElement.dataset.sky = sky;
    write('clock', time.replaceAll('.', ':') + ' WIB');
    write('date', day.format(epoch));
    write('sky', sky[0].toUpperCase() + sky.slice(1));
    write('where', prefs.suasana === 'wib' ? 'Mengikuti jam WIB' : 'Pratinjau suasana');
    for (const use of skySymbols)
      use.setAttribute(
        'href',
        '#i-' + { pagi: 'sunrise', siang: 'sun', sore: 'sunset', malam: 'moon' }[sky],
      );
    if (prefs.kota !== city) setCity(prefs.kota);
    if (
      !document.hidden &&
      !active &&
      Date.now() - fetched > (status === 'offline' ? 180000 : interval)
    )
      fetchWeather();
    paint();
  };
}
