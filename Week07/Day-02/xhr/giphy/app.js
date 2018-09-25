'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'something'
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});