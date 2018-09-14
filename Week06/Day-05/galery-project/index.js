'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('home', {
    message: 'picture here',
    picture: 'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg'
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
