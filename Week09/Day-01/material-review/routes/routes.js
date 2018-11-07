'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  res.json({});
});

module.exports = app;

