'use strict';

const delayedPrinter = () => {
  console.log('apple');
  setTimeout(() => {
    console.log('pear');
  }, 1000);
  setTimeout(() => {
    console.log('melon');
  }, 3000);
  setTimeout(() => {
    console.log('grapes');
  }, 5000);
}

delayedPrinter();