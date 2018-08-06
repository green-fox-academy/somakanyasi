'use strict';

let lineCount: number = 18;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


let a: string = ' ';
let b: string = '*';
for (let i: number = 0; i < lineCount; i++) {
    for (let j: number = i; j < (lineCount - 1); j++) {
        a += ' ';
    }
    console.log(a + b);
    a = ' ';
    b += '**';
}