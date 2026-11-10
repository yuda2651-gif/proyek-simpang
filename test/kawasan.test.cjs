const test = require('node:test');
const assert = require('node:assert/strict');
const atlas = require('../aset/grafis/kawasan.js');
const cahaya = require('../aset/js/pencahayaan.js');
test('Empat kuadran masing-masing berisi empat petak terpisah dengan tujuan kamera yang valid', () => {
  const seen = new Set();
  for (const kode of ['BL', 'TL', 'TG', 'BD']) {
    const area = atlas.petak.filter((p) => p.kode === kode);
    assert.equal(area.length, 4);
    assert.equal(area.filter((p) => p.jenis === 'inti').length, 1);
    for (const [i, p] of area.entries()) {
      assert(!seen.has(p.id));
      seen.add(p.id);
      assert(
        p.cx > atlas.batas.x &&
          p.cx < atlas.batas.x + atlas.batas.w &&
          p.cy > atlas.batas.y &&
          p.cy < atlas.batas.y + atlas.batas.h,
      );
      for (const other of area.slice(i + 1)) {
        const overlaps =
          p.x < other.x + other.w &&
          other.x < p.x + p.w &&
          p.y < other.y + other.h &&
          other.y < p.y + p.h;
        assert.equal(overlaps, false);
      }
    }
  }
  assert.equal(seen.size, 16);
});
test('Setiap jalan mempunyai empat PJU di tepi jalan; kepala lampu mengarah ke permukaan jalan', () => {
  assert.equal(new Set(atlas.tiang.map((o) => o.id)).size, 16);
  for (const dir of ['U', 'T', 'S', 'B']) {
    const lamps = atlas.tiang.filter((o) => o.id.startsWith(dir + '-'));
    assert.equal(lamps.length, 4);
    for (const o of lamps) {
      const lateral = dir === 'U' || dir === 'S' ? 'u' : 'v',
        beam = dir === 'U' || dir === 'S' ? 'a' : 'b';
      assert(Math.abs(o[lateral]) > 49);
      assert(Math.abs(o[beam]) < 49);
    }
  }
});
test('PJU otomatis mengikuti WIB, dan preset mengikuti suasana yang dipilih di HMI', () => {
  for (const [hour, expected, lit] of [
    [4, 'malam', true],
    [5, 'pagi', false],
    [10, 'pagi', false],
    [11, 'siang', false],
    [14, 'siang', false],
    [15, 'sore', true],
    [17, 'sore', true],
    [18, 'malam', true],
    [23, 'malam', true],
  ]) {
    assert.equal(cahaya.suasana(hour), expected);
    assert.equal(cahaya.lampuJalan(cahaya.suasana(hour)), lit);
  }
  assert.equal(cahaya.lampuJalan(cahaya.suasana(12, 'malam')), true);
  assert.equal(cahaya.lampuJalan(cahaya.suasana(22, 'siang')), false);
});
