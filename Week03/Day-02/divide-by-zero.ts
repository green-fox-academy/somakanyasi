declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


let divider: number = 0;

function dividerWithError(input: number) {
    try {
        if (input == 0) {
            throw new TypeError('fail');
        } else {
            console.log(10 / input);

        }
    } catch (error) {
        console.log(error.message);
    }
}
