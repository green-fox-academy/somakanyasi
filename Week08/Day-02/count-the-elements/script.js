'use strict';

const button = document.querySelector('button');
const ul = document.querySelector('ul');
const result = document.querySelector('.result');

let count = ul.childElementCount;
const callback = () => {
  result.textContent = count;
}

button.addEventListener('click', callback);
