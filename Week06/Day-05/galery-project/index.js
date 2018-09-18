'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

const picturesWDescrip = [
  {picUrl:'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg', title:'Welcome To The Rick And Morty World', descrip:'Let us begin our journey with the portal gun Morty you dumb piece of....'},
  {picUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Frick-morty-trading-card-set-1.jpg?q=75&w=800&cbr=1&fit=max' , title:"Let's get schwifty!" , descrip:'The ultimate abandonment of inhibition while having a good time.'},
  {picUrl:'https://3m84r11gpx1j11puas2g5wfl-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/RickMortyTerryFolds.jpg' , title:'Show me what you got....' , descrip:'The Cromulons are here to decide who has the best tunes in the galaxy. Shame that we lost all the musicians at that earthquake including Kanye.'}
]

const myPictures = [
  'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg',
  'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Frick-morty-trading-card-set-1.jpg?q=75&w=800&cbr=1&fit=max',
  'https://3m84r11gpx1j11puas2g5wfl-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/RickMortyTerryFolds.jpg'
];

const pictureTitles = [
  'Welcome To The Rick And Morty World',
  "Let's get schwifty!",
  'Show me what you got....'
]

const pictureDescrips = [
  'Let us begin our journey with the portal gun Morty you dumb piece of....',
  'The ultimate abandonment of inhibition while having a good time.',
  'The Cromulons are here to decide who has the best tunes in the galaxy. Shame that we lost all the musicians at that earthquake including Kanye.'
]

app.get('/', (req, res) => {

  res.render('home', {
    message: 'picture here',
    picture: picturesWDescrip[0].picUrl,
    pictureTitle: picturesWDescrip[0].title,
    pictureDescrip: picturesWDescrip[0].descrip,
  });

  let nextButton = document.querySelector('#nextButton');
  nextButton.addEventListener('click', () => {
    console.log('next button was clicked');
  });
  // let currentIndex = 0;
  // let displayedIMG = document.querySelector('#displayedIMG')
  // const nextButton = document.querySelector('#nextButton');
  // nextButton.addEventListener('click', () => {
  //   if (currentIndex < myPictures.length - 1) {
  //     currentIndex ++;
  //   } else {
  //     currentIndex = 0;
  //   }
  //   picture = myPictures[currentIndex];
  //   });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});

//module.exports = picturesWDescrip;