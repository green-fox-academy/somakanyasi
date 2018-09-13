'use strict';

const getTrickyAverage = (numbers: number []): number => {
  let smallestOdd: number = null;
  let largestEven: number = null;
  for(let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && largestEven === null) {
      largestEven = numbers[i];
    } else if (numbers[i] % 2 === 0 && largestEven < numbers[i]) {
      largestEven = numbers[i];
    } else if (numbers[i] % 2 === 1 && smallestOdd === null) {
      smallestOdd = numbers[i];
    } else if (numbers[i] % 2 === 1 && smallestOdd < numbers[i]) {
      smallestOdd = numbers[i];
    }
  }
  if( smallestOdd ===0 || largestEven === 0) {
    throw new Error('OMG there is no sich thing');
  } 
  return (smallestOdd + largestEven) / 2;
}

function getTrickyAverage2 (numbers: number []): number {
  let maxEven: number = null;
  let minOdd: number = null;
  let firstNumber: number = numbers[0];

  for (let j: number = 0; j < numbers.length; j++) {
    if (maxEven < numbers[j] && numbers[j] % 2 === 0) {
      maxEven = numbers[j];
    } else if (numbers[j] < firstNumber && )
  }
}

const abs = (numberToCheck: number) => {
  if (numberToCheck < 0) {

  }
}
