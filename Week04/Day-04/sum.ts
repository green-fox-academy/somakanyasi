'use strict';

export class SumClass {
  protected listOfNumbers: any [];

  constructor(listOfNumbers: number []){
    this.listOfNumbers = listOfNumbers;
  }
  sum(listOfNumbers?): any {
    if (listOfNumbers === null) {
      return null;
    } else {
      return this.listOfNumbers.reduce((a, b) => a + b, 0);
    }
  }  
}

export let inputNumbers = new SumClass([2, 4, 6, 8, 10]);
export let emptyList = new SumClass([]);
export let listWithOneElement = new SumClass ([5]);
export let nullElement = new SumClass ([null]);
export let stringElement = new SumClass (['hali', 'gali']);

console.log(stringElement.sum());


