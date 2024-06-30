const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/get-time') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Your vote is accepted: ${new Date().toLocaleString()}`);
    } else {
        const filePath = ('./index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
});

server.listen(8001, () => {
    console.log('Server running at http://localhost:8001');
});


