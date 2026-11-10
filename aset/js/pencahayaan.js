/** Suasana yang sama dipakai oleh jam WIB, sekolah, palet kawasan, dan lampu jalan. */
const Pencahayaan = (() => {
  function suasana(jamWIB, pilihan = 'wib') {
    if (pilihan !== 'wib') return pilihan;
    if (jamWIB < 5 || jamWIB >= 18) return 'malam';
    if (jamWIB < 11) return 'pagi';
    return jamWIB < 15 ? 'siang' : 'sore';
  }
  function lampuJalan(sky) {
    return sky === 'sore' || sky === 'malam';
  }
  return { suasana, lampuJalan };
})();
if (typeof module === 'object' && module.exports) module.exports = Pencahayaan;
