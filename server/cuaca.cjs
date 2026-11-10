const { kota } = require('../aset/js/data.js');
// Satu permintaan per kota tiap 15 menit, dibagikan ke semua klien jaringan lokal.
const weatherCache = new Map();
async function forecast(city) {
  if (!Object.hasOwn(kota, city)) throw Error('Kota tidak tersedia.');
  const now = Date.now();
  const entry = weatherCache.get(city) || { freshUntil: 0, last: null, pending: null };
  weatherCache.set(city, entry);
  const previous = () => {
    if (entry.last && now - entry.last.time * 1000 < 90 * 60000)
      return { current: entry.last, cached: true };
    throw Error('Data cuaca belum tersedia.');
  };
  if (now < entry.freshUntil)
    return entry.failed ? previous() : { current: entry.last, cached: false };
  if (entry.pending) return entry.pending;
  entry.pending = (async () => {
    try {
      const [latitude, longitude] = kota[city].koordinat;
      const q = new URLSearchParams({
        latitude,
        longitude,
        current: 'temperature_2m,weather_code',
        timeformat: 'unixtime',
        timezone: 'Asia/Jakarta',
      });
      const response = await fetch('https://api.open-meteo.com/v1/forecast?' + q, {
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw Error('Layanan cuaca tidak tersedia.');
      const { current } = await response.json();
      if (
        !Number.isFinite(current?.time) ||
        !Number.isFinite(current.temperature_2m) ||
        !Number.isInteger(current.weather_code)
      )
        throw Error('Data cuaca tidak lengkap.');
      entry.last = {
        time: current.time,
        temperature_2m: current.temperature_2m,
        weather_code: current.weather_code,
      };
      entry.failed = false;
      entry.freshUntil = Date.now() + 900000;
      return { current: entry.last, cached: false };
    } catch {
      entry.failed = true;
      entry.freshUntil = Date.now() + 120000;
      return previous();
    } finally {
      entry.pending = null;
    }
  })();
  return entry.pending;
}

module.exports = { forecast };
