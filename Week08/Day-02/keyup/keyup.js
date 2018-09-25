'use strict';

const body = document.querySelector('body');
const h1 = document.querySelector('h1');

const keyCodeDisplayer = (e) => {
  h1.textContent = `Last pressed key code is: ${e.keyCode}`;
};

body.addEventListener('keyup', keyCodeDisplayer);
