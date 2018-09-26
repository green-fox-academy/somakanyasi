'use strict';

const body = document.querySelector('body');

const getRandomNum = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandomNum()},${getRandomNum()},${getRandomNum()})`;
};