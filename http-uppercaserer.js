const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Only POST requests are allowed\n');
  }

  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port);
