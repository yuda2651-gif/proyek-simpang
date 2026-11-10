const { readFile } = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const pages = new Set(['index.html', 'simulator.html', 'hmi.html']);
const publicFiles =
  /^aset\/(?:css\/[\w-]+\.css|(?:grafis|js)\/[\w-]+\.js|font\/[\w.-]+\.(?:woff2|txt))$/;
const types = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  woff2: 'font/woff2',
  txt: 'text/plain; charset=utf-8',
};
async function layaniBerkas(req, res, pathname) {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  const file = pathname === '/' ? 'index.html' : pathname.slice(1),
    page = pages.has(file);
  if (!page && !publicFiles.test(file)) {
    res.writeHead(404).end();
    return;
  }
  try {
    let bytes = await readFile(path.join(root, file));
    if (page)
      bytes = Buffer.from(
        bytes
          .toString('utf8')
          .replace(/(name="simpang-mode"\s+content=")demo(")/, '$1server$2'),
      );
    res.writeHead(200, {
      'Content-Type': types[path.extname(file).slice(1)],
      'Content-Length': bytes.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500).end();
  }
}
module.exports = { layaniBerkas };
