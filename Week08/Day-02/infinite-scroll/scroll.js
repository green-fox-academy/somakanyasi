'use strict';

const body = document.querySelector('body');

const getRandomNum = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandomNum()},${getRandomNum()},${getRandomNum()})`;
};

const randomDivCreator = () => {
  return Math.floor(Math.random() * 10 + 10);
}

const bottomDivCreator = () => {
  for (let i = 0; i < randomDivCreator(); i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomColor();
    body.appendChild(div);
  }
}