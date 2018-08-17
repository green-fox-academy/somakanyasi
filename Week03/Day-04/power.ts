// Given base and n that are both 1 or more, compute recursively (no loops)
'use strict';

// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


//power (3, 2) -> 3 * 3
//power (4, 3) -> 4 * 4 * 4


function powerN(base: number, exponent: number): number {
    let result: number = 1;
    for (let i: number = exponent; i > 0; i--){
        result *= base;
    }
    return result;
}

console.log(powerN(3, 2));


//with recursion
function powerNRecursive(base: number, exponent: number): number {
    if (exponent == 1) {
        return base;
    } else {
        return base * powerNRecursive(base, exponent -1);
    }
}

console.log(powerNRecursive(4, 3));
