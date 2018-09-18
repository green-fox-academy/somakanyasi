//const picturesWDescrip = require('./../index')
const picturesWDescrip = [
  {picUrl:'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg', title:'Welcome To The Rick And Morty World', descrip:'Let us begin our journey with the portal gun Morty you dumb piece of....'},
  {picUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Frick-morty-trading-card-set-1.jpg?q=75&w=800&cbr=1&fit=max' , title:"Let's get schwifty!" , descrip:'The ultimate abandonment of inhibition while having a good time.'},
  {picUrl:'https://3m84r11gpx1j11puas2g5wfl-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/RickMortyTerryFolds.jpg' , title:'Show me what you got....' , descrip:'The Cromulons are here to decide who has the best tunes in the galaxy. Shame that we lost all the musicians at that earthquake including Kanye.'}
]

window.onload = () => {
  let currentIndex = 0;
  let displayedIMG = document.querySelector('#displayedIMG');
  let displayedTitle = document.querySelector('.desrip-title');
  let displayedDescrip = document.querySelector('.descrip-text');
  const nextButton = document.querySelector('#nextButton');
  nextButton.onclick = function () {
    console.log(displayedIMG.src);
    console.log(picturesWDescrip[currentIndex + 1].picUrl);
    displayedIMG.src = picturesWDescrip[currentIndex + 1].picURL;
    displayedTitle.innerHTML = picturesWDescrip[currentIndex + 1].title;
    displayedDescrip.innerHTML = picturesWDescrip[currentIndex + 1].descrip;
    currentIndex += 1;
    console.log('We did it!!!');
  }
}