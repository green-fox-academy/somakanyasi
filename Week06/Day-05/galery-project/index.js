'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

const myPictures = [
  'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg',
  'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Frick-morty-trading-card-set-1.jpg?q=75&w=800&cbr=1&fit=max',
  'https://3m84r11gpx1j11puas2g5wfl-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/RickMortyTerryFolds.jpg'
];

app.get('/', (req, res) => {
  res.render('home', {
    message: 'picture here',
    picture: 'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg'
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
