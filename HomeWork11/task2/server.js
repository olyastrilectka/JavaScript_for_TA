const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const authors = [
    'David Flanagan',
    'Kyle Simpson',
    'John Resig',
    'Geremy Keith'
];

app.get('/authors', (req, res) => {
    res.json(authors);
});

app.use(express.static(path.join('data')));

app.get('/', (req, res) => {
    res.sendFile(path.join('data', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
