'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4



let numberOfElements: number = Math.ceil(Math.random() * 15);
let generatedNumber: number;
let generatedList: number [] = [];
let sum: number = 0;

for (let i: number = 0; i < numberOfElements; i++){
    generatedNumber = Math.ceil(Math.random() * 50);
    generatedList.push(generatedNumber);
    sum += generatedNumber;
}

let average: number = sum / numberOfElements;

console.log('The number of elements in  our list is: ' + numberOfElements);
console.log('The generated list: ' + generatedList);
console.log('The sum of the elements: ' + sum);
console.log('The average of them: ' + average);



