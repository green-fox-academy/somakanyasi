'use strict';

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addingNumbers(n: number): number {
    if (n < 0) {
        console.log('Don\'t use negative numbers dude!');
    } else if(n == 1) {
        return 1;
    } else {
        return n + addingNumbers(n - 1);
    }
}

console.log(addingNumbers(10));
