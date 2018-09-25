'use strict';

const button = document.querySelector('button');
const h2 = document.querySelector('h2');

const delayedPrinter = () => {
  setTimeout(() => {
    h2.textContent = '2 seconds ellapsed';
  }, 2000);
}

button.addEventListener('click', delayedPrinter);
