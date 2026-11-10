// Live Server: satu rekaman per folder di browser. Server Node: satu keadaan untuk semua perangkat.
function hubSimpang(onUpdate) {
  const server = document.querySelector('meta[name="simpang-mode"]').content === 'server';
  const folder = location.pathname.slice(0, location.pathname.lastIndexOf('/') + 1);
  const storageKey = 'simpang.v1.' + folder;
  let state = null,
    link = 'Menghubungkan…',
    locked = false;
  let ws,
    timer,
    offset = null,
    id = 0,
    lastReceived = 0,
    closed = false;
  const pending = new Map();
  // Selisih jam server dan perangkat diselaraskan pelan-pelan. Satu kiriman yang terlambat
  // tidak lagi menggeser jam gambar, sehingga penyeberang dan hitung mundur tidak melompat.
  const now = () => (server && offset !== null ? performance.now() + offset : Date.now());
  function selaraskan(serverNow) {
    const measured = serverNow - performance.now();
    if (offset === null || Math.abs(measured - offset) > 1500) offset = measured;
    else offset += (measured - offset) * (measured > offset ? 0.5 : 0.08);
  }
  let hasSession = false;
  // Kode operator diingat per tab (sessionStorage) agar pindah halaman atau sambung ulang
  // tidak meminta kode lagi. Hanya Panel Operator yang memakainya.
  const hmi = document.body.dataset.page === 'hmi';
  const codeKey = 'simpang.kode.' + location.host;
  let unlocking = false,
    rejected = false,
    tried = false;
  const remembered = () => {
    try {
      return sessionStorage.getItem(codeKey) || '';
    } catch {
      return '';
    }
  };
  const remember = (code) => {
    try {
      if (code) sessionStorage.setItem(codeKey, code);
      else sessionStorage.removeItem(codeKey);
    } catch {
      /* kode tetap bisa diketik ulang */
    }
  };
  const notify = () => onUpdate({ state, link, locked, hasSession, unlocking, rejected });
  function autoUnlock() {
    const code = remembered();
    if (!hmi || !server || tried || !code) return;
    tried = true;
    unlocking = true;
    rejected = false;
    command('buka', code).then(
      () => {
        unlocking = false;
        notify();
      },
      (e) => {
        unlocking = false;
        // Hanya hapus kode bila server benar-benar menolaknya, bukan karena koneksi terputus.
        if (e.dariServer) {
          remember('');
          rejected = true;
        }
        notify();
      },
    );
  }
  function readDemo() {
    const data = JSON.parse(localStorage.getItem(storageKey) || 'null');
    hasSession = !!data;
    return Siklus.restore(data);
  }
  function syncDemo() {
    try {
      state = readDemo();
      link = 'Demo dua tab';
    } catch {
      state = null;
      link = 'Penyimpanan browser tidak tersedia';
    }
    notify();
  }
  function cancelPending() {
    for (const p of pending.values()) {
      clearTimeout(p.timer);
      p.reject(Error('Koneksi terputus. Periksa status sebelum mencoba lagi.'));
    }
    pending.clear();
  }
  function connect() {
    if (closed) return;
    const scheme = location.protocol === 'https:' ? 'wss:' : 'ws:';
    ws = new WebSocket(scheme + '//' + location.host + '/ws');
    tried = false;
    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'state') {
        hasSession = true;
        state = msg.state;
        locked = msg.locked;
        selaraskan(msg.now);
        lastReceived = performance.now();
        link = 'Server terhubung';
        if (!locked) unlocking = false;
        else if (!tried && hmi && remembered()) unlocking = true;
        notify();
        if (locked) autoUnlock();
      } else if (msg.type === 'ack' && pending.has(msg.id)) {
        const p = pending.get(msg.id);
        clearTimeout(p.timer);
        pending.delete(msg.id);
        if (msg.ok) p.resolve();
        else p.reject(Object.assign(Error(msg.message), { dariServer: true }));
      }
    });
    ws.addEventListener('close', () => {
      state = null;
      link = 'Koneksi terputus';
      cancelPending();
      notify();
      if (!closed) timer = setTimeout(connect, 1500);
    });
    ws.addEventListener('error', () => ws.close());
  }
  async function command(action, data) {
    if (!state) throw Error('Hubungkan kembali sebelum mengirim perintah.');
    if (server) {
      if (ws.readyState !== WebSocket.OPEN) throw Error('Koneksi terputus.');
      const ident = ++id;
      const sent = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          pending.delete(ident);
          reject(Error('Belum ada balasan server. Periksa kondisi lampu.'));
        }, 4500);
        pending.set(ident, { resolve, reject, timer: timeout });
        ws.send(JSON.stringify({ type: 'command', id: ident, action, data }));
      });
      if (action !== 'buka') return sent;
      await sent;
      rejected = false;
      remember(data);
      return;
    }
    const commit = () => {
      const next = Siklus.ubah(readDemo(), action, data, Date.now());
      localStorage.setItem(storageKey, JSON.stringify(next));
      syncDemo();
    };
    if (navigator.locks) await navigator.locks.request(storageKey, commit);
    else commit();
  }
  if (server) {
    connect();
    const monitor = setInterval(() => {
      if (state && performance.now() - lastReceived > 4500) {
        state = null;
        link = 'Koneksi terputus';
        notify();
        ws.close();
      }
    }, 1000);
    window.addEventListener('pagehide', (event) => {
      if (!event.persisted) {
        closed = true;
        clearInterval(monitor);
        clearTimeout(timer);
        ws.close();
      }
    });
  } else if (location.protocol === 'file:') {
    link = 'Buka melalui Live Server';
    notify();
  } else {
    window.addEventListener('storage', (e) => {
      if (!e.key || e.key === storageKey) syncDemo();
    });
    window.addEventListener('pageshow', syncDemo);
    syncDemo();
  }
  return { now, command };
}
