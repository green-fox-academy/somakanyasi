'use strict';

const candyButton = document.querySelector('.create-candies');
const lollyButton = document.querySelector('.buy-lollypops');
const candyMachine = document.querySelector('.candy-machine');

const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

let candyNumber = 10000;
let lollypopNumber = 3;
let speedRatio = 0;
let currentLollies = lollypops.textContent;
let candyRain = 1;

candies.textContent = candyNumber;

candyButton.addEventListener('click', () => {
  candyNumber ++;
  candies.textContent = candyNumber;
});

lollyButton.addEventListener('click', () => {
  if (candyNumber >= 100) {
    candyNumber -= 100;
    lollypopNumber ++;
    candies.textContent = candyNumber;
    lollypops.textContent = `${currentLollies}🍭`;
    currentLollies = lollypops.textContent;
  } else {
    lollyButton.disabled = true;
  }
});

const lollyPopForCandies = () => {
  if (lollypopNumber >= 10) {
    candyNumber = candyNumber + speedRatio;
    candies.textContent = candyNumber;
    candyCreationRatio();
  }
}

const candyCreationRatio = () => {
  speedRatio = Math.floor(lollypopNumber / 10) * candyRain;
  speed.textContent = speedRatio;
}

setInterval(lollyPopForCandies, 1000);

candyMachine.addEventListener('click', () => {
  candyRain *= 10;
});
