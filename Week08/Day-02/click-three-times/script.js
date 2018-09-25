'use strict';

window.onload = () => {
  const button = document.querySelector('button');
  const h2 = document.querySelector('h2');
  let counter = 0;

  setTimeout(()=> {
    button.addEventListener('click', () => {
      counter ++;
      if (counter === 3) {
        h2.textContent = '5 seconds elapsed and clicked 3 times';
      }
    })
  }, 5000);
}
