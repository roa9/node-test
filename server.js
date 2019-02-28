'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';
const SECRET = process.env.SECRET_PASSPHRASE;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Server Secret: ${SECRET}`);
