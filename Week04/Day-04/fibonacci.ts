'use strict';

export function fibonacciSequence(n: number): number {
  if (n <= 3) {
    return 1;
  } else {
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
  }
}
console.log(fibonacciSequence(9));


export let testNum: number = 9;
export let negativeTestNum: number = -2;
export let testNum2: number = 0;