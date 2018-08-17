'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(n: number): number {
  if (n < 0) {
    console.log('Please provide a positive number!');
  } else {
    if (n == 0) {
      console.log('You have reached zero!!');
    } else {
      console.log(n);
      return countDown(n - 1);
    }
  }
}
  countDown(10);

