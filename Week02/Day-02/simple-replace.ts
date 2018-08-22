'use strict'

let example: string = 'In a dishwasher far far away';


// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away



//if you want to change all the 'dishwasher' in the string
let re = /dishwasher/gi;
let newExample = example.replace(re , 'galaxy');

console.log(newExample);

export = example;



//with simple replace:
console.log('The string after replacement: ' + example.replace('dishwasher', 'galaxy'));