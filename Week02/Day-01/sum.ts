'use strict'

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result


let myNumbers: number[] = [3, 5, 10, 25, 100];


function sum (arrayNumbers: number[], parameter: number): number {
    let sumOfNumbers = 0;
    for (let i: number =0; i < parameter; i++) {
        sumOfNumbers += arrayNumbers[i];
        
    }
    return sumOfNumbers;
}

console.log(sum(myNumbers, 5));







/*     
}
return numbers.reduce(function (a , b) {
    return a + b
});
}
*/