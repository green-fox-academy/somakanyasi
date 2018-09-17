'use strict';

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Something something in the month of May!');
});

app.listen (PORT, () => {
  console.log(`You're now listening to the smoothest tunes on port ${PORT}`);
})