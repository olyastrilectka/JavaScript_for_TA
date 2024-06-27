// **** Task1 ********************************
const os = require('os');
const http = require('http');
const path = require('path');

const greetingMessage = require('./personalmodule');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write(`Current user name: ${os.userInfo().username} \n`);
//     res.write(`OS type: ${os.type()} \n`);
//     res.write(`System work time: ${os.uptime()} minutes \n`);
//     res.write(`Current work directory: ${process.cwd()}\n`);
//     res.write(`Server file name: ${path.basename(__filename)}\n`);
//     res.end();
// }).listen(5000);

// console.log('Server running at http://localhost:5000');


// **** Task2 ********************************

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Current time: ${new Date().toLocaleString()} \n`);
    res.write(greetingMessage(os.userInfo().username));
    res.end();
}).listen(8000);

console.log('Server running at http://localhost:8000');