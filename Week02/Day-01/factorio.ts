'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial


let input: number = 10;

function factorio (n) {
    if (n == 0 || n ==1) {
        return 1;
    }
    return factorio (n - 1) * n;
}
console.log(factorio(input));