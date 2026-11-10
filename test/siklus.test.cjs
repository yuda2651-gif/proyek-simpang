const test = require('node:test');
const assert = require('node:assert/strict');
const S = require('../aset/js/siklus.js');
const { arah, kota, wilayah } = require('../aset/js/data.js');
const origin = 100000;
function manual(a) {
  let s = S.ubah(S.awal(), 'mode', 'manual', origin);
  s = S.ubah(s, 'fase', a, origin);
  return S.ubah(s, 'mulai', null, origin);
}
test('Empat lengan mendapat durasi hijau sendiri dan pejalan mendapat jendela bebas kendaraan', () => {
  const durasi = { hijau: { U: 3, T: 5, S: 7, B: 10 }, kuning: 3, jeda: 2 };
  let s = S.ubah(S.awal(), 'simpan', durasi, origin);
  s = S.ubah(s, 'mulai', null, origin);
  const seen = [];
  let t = origin;
  for (let i = 0; i < 14; i++) {
    const p = S.lihat(s, t);
    const greens = arah.filter((a) => p.warnaJalan[a] === 'hijau');
    assert.deepEqual(greens, p.jenis === 'hijau' ? [p.arah] : []);
    if (greens.length) {
      seen.push(p.arah);
      assert.equal(p.sisa, durasi.hijau[p.arah]);
    }
    if (p.pejalan) {
      assert.equal(p.kiri, false);
      assert.equal(p.sisa, 9);
    }
    for (const d of arah) {
      if (p.warnaJalan[d] !== 'merah') continue;
      const next = S.lihat(s, t + 1000 * p.detikJalan[d]);
      assert.equal(next.warnaJalan[d], 'hijau');
    }
    t = p.end;
  }
  assert.deepEqual(seen, arah);
  assert.equal(S.lihat(s, t).arah, 'U');
});
test('Setiap pasangan perpindahan manual melewati kuning, kemudian semua merah', () => {
  for (const from of arah)
    for (const to of arah.filter((x) => x !== from)) {
      const s = S.ubah(manual(from), 'fase', to, origin + 1000);
      const amber = S.lihat(s, origin + 1100),
        clear = S.lihat(s, origin + 4100),
        target = S.lihat(s, origin + 6100);
      assert.equal(amber.warnaJalan[from], 'kuning');
      assert(arah.every((a) => clear.warnaJalan[a] === 'merah'));
      assert.deepEqual(
        arah.filter((a) => target.warnaJalan[a] === 'hijau'),
        [to],
      );
      assert.equal(target.sisa, null);
    }
});
test('Berhenti dan mulai kembali tidak memotong waktu orang yang sudah menyeberang', () => {
  let s = manual('P');
  s = S.ubah(s, 'hentikan', null, origin + 900);
  s = S.ubah(s, 'fase', 'T', origin + 1000);
  s = S.ubah(s, 'mulai', null, origin + 1200);
  assert(S.lihat(s, origin + 3000).pejalan);
  assert.equal(S.lihat(s, origin + 9050).jenis, 'jeda');
  assert.equal(S.lihat(s, origin + 11050).warnaJalan.T, 'hijau');
});
test('Data lama mempertahankan lokasi dan durasi saat pindah dari pasangan arah ke kendali per jalan', () => {
  const s = S.restore({
    mulai: 10,
    mode: 'manual',
    pilihan: 'TB',
    durasi: { hijau: 7, kuning: 4, jeda: 3 },
    lingkungan: { suasana: 'sore', kota: 'Tangerang' },
  });
  assert.equal(s.mulai, null);
  assert.equal(s.pilihan, 'T');
  assert.deepEqual(s.durasi.hijau, { U: 7, T: 7, S: 7, B: 7 });
  assert.equal(s.lingkungan.kota, 'Tangerang');
  assert.equal(kota.Tangerang.provinsi, 'Banten');
  assert.equal(wilayah.Banten.length, 8);
});

test('Mengubah mode atau durasi saat berjalan perlu berhenti; konfirmasi berlaku untuk satu sesi', () => {
  const running = S.ubah(S.awal(), 'mulai', null, origin);
  const cfg = { ...running.durasi, kuning: 5 };
  assert.throws(() => S.ubah(running, 'mode', 'manual', origin + 1), /Hentikan/);
  assert.throws(() => S.ubah(running, 'simpan', cfg, origin + 1), /Hentikan/);
  assert.throws(() => S.ubah(running, 'hentikan', { mulai: origin, mode: 'lain' }, origin + 1));
  const stopped = S.ubah(running, 'hentikan', { mulai: origin }, origin + 2);
  assert.equal(stopped.mode, running.mode);
  assert.equal(stopped.mulai, null);
  const saved = S.ubah(stopped, 'simpan', cfg, origin + 3);
  assert.equal(saved.durasi.kuning, 5);
  const next = S.ubah(saved, 'mulai', null, origin + 4);
  assert.throws(() => S.ubah(next, 'hentikan', { mulai: origin, mode: 'manual' }, origin + 5), /Sesi/);
  assert.equal(S.lihat(next, origin + 6).aktif, true);
});

test('Konfirmasi berhenti dan ganti mode merupakan satu perubahan dan pejalan tetap terlindungi', () => {
  const walking = manual('P');
  const stop = S.ubah(walking, 'hentikan', { mulai: origin, mode: 'otomatis' }, origin + 500);
  assert.equal(stop.mode, 'otomatis');
  assert.equal(stop.mulai, null);
  assert(arah.every((a) => S.lihat(stop, origin + 600).warnaJalan[a] === 'merah'));
  const resume = S.ubah(stop, 'mulai', null, origin + 1000);
  assert(S.lihat(resume, origin + 1500).pejalan);
  assert.equal(S.lihat(resume, origin + 9050).jenis, 'jeda');
  assert.equal(S.lihat(resume, origin + 11050).warnaJalan.U, 'hijau');
});
