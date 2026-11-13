#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 8383;
const ROOT_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.jsonl': 'text/plain'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';
  
  const filePath = path.join(ROOT_DIR, decodeURIComponent(reqUrl));
  
  // Security check to avoid directory traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

function openBrowser(url) {
  const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open');
  exec(`${start} ${url}`);
}

server.listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}`;
  console.log(`
  _   _    _    ____ _  _______ ____  _     _____    _    ____  _   _ 
 | | | |  / \  / ___| |/ / ____|  _ \| |   | ____|  / \  |  _ \| \ | |
 | |_| | / _ \| |   | ' /|  _| | |_) | |   |  _|   / _ \ | |_) |  \| |
 |  _  |/ ___ \ |___| . \| |___|  _ <| |___| |___ / ___ \|  _ <| |\  |
 |_| |_/_/   \_\____|_|\_\_____|_| \_\_____|_____/_/   \_\_| \_\_| \_|

====================================================================
  ⚡ HACKER LEARN — Anti-Algorithm Technical Learning Platform
  Curated from 6,454+ HackerTube Videos & 20 Years of Hacker News
====================================================================
  [+] Local Server:    ${url}
  [+] User Progress:   Locally saved in your browser (Zero login needed)
====================================================================
  🚀 Launching browser automatically...
  💡 Press [Ctrl+C] to exit.
====================================================================
`);

  openBrowser(url);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`[!] Port ${PORT} is busy, retrying on ${PORT + 1}...`);
    server.listen(PORT + 1, '127.0.0.1');
  } else {
    console.error('Server error:', e);
  }
});
