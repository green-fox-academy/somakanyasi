'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let user = 'Guest';
  if (req.query.name !== undefined) {
    user = req.query.name;
  }
  res.render('home', {
    header: user,
  });
});

app.listen(PORT);
