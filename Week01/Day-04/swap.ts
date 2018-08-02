'use strict';

// Swap the values of these variables

let a: number = 123;
let b: number = 526;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a);
console.log(b);