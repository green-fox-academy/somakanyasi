'use strict';

const nav = document.querySelector('nav');
const imgInspector = document.querySelector('.img-inspector');

console.log(nav);
console.log(imgInspector);

let xCoord = 0;
let yCoord = 0;
nav.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'up') {
    yCoord -= 10;
    imgInspector.style.backgroundPositionY = `${yCoord}px`;
  } else if (event.target.dataset.direction === 'down') {
    yCoord += 10;
    imgInspector.style.backgroundPositionY = `${yCoord}px`;
  } else if (event.target.dataset.direction === 'right') {
    xCoord += 10;
    imgInspector.style.backgroundPositionX = `${xCoord}px`;
  } else if (event.target.dataset.direction === 'left') {
    xCoord -= 10;
    imgInspector.style.backgroundPositionX = `${xCoord}px`;
  }
});

let backgroundSize = 200;
nav.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'in') {
    backgroundSize += 20;
    imgInspector.style.backgroundSize = `${backgroundSize}%`;
  } else if (event.target.dataset.direction === 'out') {
    backgroundSize -= 20;
    imgInspector.style.backgroundSize = `${backgroundSize}%`;
  }
});
