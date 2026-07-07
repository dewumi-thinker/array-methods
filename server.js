const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
http.createServer((req, res) => {
  let file = req.url === '/' ? '/index.html' : req.url;
  const ext = path.extname(file);
  const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css' };
  fs.readFile(dir + file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(3002, () => console.log('Server running on http://localhost:3002'));
