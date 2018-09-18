'use strict';

let section = document.getElementsByTagName('section');
let divTags = document.getElementsByTagName('div');

for (let i = 2; i <= 100; i++) {
  const div = document.createElement('div');
  div.innerText = i;
  section[0].appendChild(div);
}

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

let currentDiv = 0;
const primeFinder = (currentNumber) => {
  if (isPrime(parseInt(divTags[currentNumber].textContent))) {
    divTags[currentNumber].classList.add('prime');
  } else {
    divTags[currentNumber].classList.add('not-prime');
  }
  currentDiv ++;
  if (currentDiv >= divTags.length) {
    clearInterval(timer);
  }
}

console.log(divTags[4]);

let timer = setInterval(() => primeFinder(currentDiv));
