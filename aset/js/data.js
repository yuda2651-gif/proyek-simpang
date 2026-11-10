/** Nama dan titik perkiraan pusat kota untuk permintaan cuaca. Dipakai juga oleh server. */
const DataSimpang = (() => {
  const jalan = {
    U: { arah: 'Utara', nama: 'Jl. Kenanga' },
    T: { arah: 'Timur', nama: 'Jl. Angsana' },
    S: { arah: 'Selatan', nama: 'Jl. Tanjung' },
    B: { arah: 'Barat', nama: 'Jl. Cempaka' },
  };
  const wilayah = {
    Jakarta: [['Jakarta', -6.18, 106.83]],
    Banten: [
      ['Serang', -6.11528, 106.15417, 'Kota Serang'],
      ['Cilegon', -6.0144, 106.0542, 'Kota Cilegon'],
      ['Tangerang', -6.17806, 106.63, 'Kota Tangerang'],
      ['Tangerang Selatan', -6.31, 106.72, 'Kota Tangerang Selatan'],
      ['Kabupaten Serang', -6.125, 106.23278, 'Kab. Serang · Ciruas'],
      ['Kabupaten Tangerang', -6.22806, 106.51389, 'Kab. Tangerang · Tigaraksa'],
      ['Pandeglang', -6.3084, 106.1067, 'Kab. Pandeglang · Pandeglang'],
      ['Lebak', -6.3591, 106.2494, 'Kab. Lebak · Rangkasbitung'],
    ],
    'Jawa Barat': [
      ['Bandung', -6.92, 107.61],
      ['Bekasi', -6.24, 106.99],
      ['Bogor', -6.6, 106.8],
      ['Depok', -6.4, 106.82],
    ],
    'Jawa Tengah': [['Semarang', -6.99, 110.42]],
    'DI Yogyakarta': [['Yogyakarta', -7.8, 110.37]],
    'Jawa Timur': [['Surabaya', -7.25, 112.75]],
    'Sumatera Utara': [['Medan', 3.6, 98.67]],
    'Sumatera Barat': [['Padang', -0.95, 100.35]],
    'Sumatera Selatan': [['Palembang', -2.99, 104.76]],
    'Kalimantan Barat': [['Pontianak', -0.03, 109.34]],
  };
  const kota = Object.create(null);
  for (const [provinsi, places] of Object.entries(wilayah)) {
    for (const [id, lat, lon, label = id] of places)
      kota[id] = { label, provinsi, koordinat: [lat, lon] };
  }
  return {
    jalan,
    arah: Object.keys(jalan),
    wilayah,
    kota,
    suasana: ['wib', 'pagi', 'siang', 'sore', 'malam'],
  };
})();
if (typeof module === 'object' && module.exports) module.exports = DataSimpang;
