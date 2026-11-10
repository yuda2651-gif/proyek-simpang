'use strict';
const http = require('node:http');
const { networkInterfaces } = require('node:os');
const { randomBytes, timingSafeEqual } = require('node:crypto');
const { WebSocketServer, WebSocket } = require('ws');
const Siklus = require('./aset/js/siklus.js');
const { kota } = require('./aset/js/data.js');
const { forecast } = require('./server/cuaca.cjs');
const { layaniBerkas } = require('./server/statis.cjs');

const lan = process.argv.includes('--lan');
const port = Number(process.env.PORT || 8080);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw Error('PORT harus 1–65535.');
const key = process.env.KUNCI_OPERATOR || (lan ? randomBytes(5).toString('hex') : '');
let state = Siklus.awal();
const server = http.createServer(async (req, res) => {
  let url;
  try {
    url = new URL(req.url, 'http://localhost');
  } catch {
    return res.writeHead(400).end();
  }
  if (url.pathname === '/api/cuaca') {
    if (req.method !== 'GET') return res.writeHead(405, { Allow: 'GET' }).end();
    const city = url.searchParams.get('kota') || 'Jakarta';
    if (!Object.hasOwn(kota, city)) return res.writeHead(400).end('Kota tidak tersedia.');
    try {
      const data = await forecast(city);
      res
        .writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        })
        .end(JSON.stringify(data));
    } catch {
      res
        .writeHead(503, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' })
        .end(JSON.stringify({ message: 'Cuaca belum tersedia.' }));
    }
    return;
  }
  await layaniBerkas(req, res, url.pathname);
});
const wsServer = new WebSocketServer({
  noServer: true,
  maxPayload: 2048,
  perMessageDeflate: false,
});
server.on('upgrade', (req, socket, head) => {
  let sameOrigin = false;
  try {
    sameOrigin = new URL(req.headers.origin).host === req.headers.host;
  } catch {}
  if (req.url !== '/ws' || !sameOrigin) return socket.destroy();
  wsServer.handleUpgrade(req, socket, head, (ws) => wsServer.emit('connection', ws));
});
function send(ws, msg) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(msg));
}
function snapshot(ws) {
  send(ws, { type: 'state', state, now: Date.now(), locked: !ws.operator });
}
function validKey(input) {
  if (typeof input !== 'string') return false;
  const a = Buffer.from(key),
    b = Buffer.from(input);
  return a.length === b.length && timingSafeEqual(a, b);
}
wsServer.on('connection', (ws) => {
  ws.operator = !key;
  ws.alive = true;
  ws.on('pong', () => {
    ws.alive = true;
  });
  ws.on('error', () => ws.terminate());
  snapshot(ws);
  ws.on('message', (raw, binary) => {
    let msg;
    try {
      if (binary) throw Error('Perintah teks diperlukan.');
      msg = JSON.parse(raw.toString());
      if (msg?.type !== 'command' || !Number.isSafeInteger(msg.id))
        throw Error('Format perintah tidak sesuai.');
      if (msg.action === 'buka') {
        if (!validKey(msg.data)) throw Error('Kode operator tidak cocok.');
        ws.operator = true;
      } else {
        if (!ws.operator) throw Error('Masukkan kode operator dari terminal server.');
        state = Siklus.ubah(state, msg.action, msg.data, Date.now());
      }
      if (msg.action === 'buka') snapshot(ws);
      else for (const peer of wsServer.clients) snapshot(peer);
      send(ws, { type: 'ack', id: msg.id, ok: true });
    } catch (e) {
      send(ws, { type: 'ack', id: msg?.id, ok: false, message: e.message });
    }
  });
});
let heartbeats = 0;
const heartbeat = setInterval(() => {
  const check = ++heartbeats % 10 === 0;
  for (const ws of wsServer.clients) {
    if (check) {
      if (!ws.alive) {
        ws.terminate();
        continue;
      }
      ws.alive = false;
      ws.ping();
    }
    snapshot(ws);
  }
}, 1000);
heartbeat.unref();
server.on('error', (e) => {
  console.error(
    e.code === 'EADDRINUSE'
      ? 'Port ' + port + ' sedang dipakai. Tutup server sebelumnya atau ubah PORT.'
      : e.message,
  );
  process.exitCode = 1;
});
server.listen(port, lan ? '0.0.0.0' : '127.0.0.1', () => {
  const ips = ['127.0.0.1'];
  if (lan) {
    // Sebagian sistem membatasi pembacaan antarmuka jaringan (misalnya Android).
    // Server tetap melayani LAN meskipun alamat Wi-Fi perlu dilihat di pengaturan perangkat.
    try {
      for (const list of Object.values(networkInterfaces()))
        for (const net of list || []) {
          if (net.family === 'IPv4' && !net.internal) ips.push(net.address);
        }
    } catch {
      /* alamat masih dapat dilihat di pengaturan Wi-Fi */
    }
  }
  console.log('Simpang berjalan. Tekan Ctrl+C untuk berhenti.');
  for (const ip of ips) console.log('  http://' + ip + ':' + port + '/');
  if (lan && ips.length === 1) console.log('Di HP: buka http://<IP-WiFi-server>:' + port + '/');
  if (key) console.log('Kode HMI untuk sesi ini: ' + key);
});
