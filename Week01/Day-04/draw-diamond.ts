'use strict';

let lineCount: number = 20;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


//UPSIDE DOWN TRIANGLE


let a: string = ' ';
let b: string = '*';
let c: string = '*';
let d: string = '  ';

for (let i: number = 0; i < lineCount/2; i++) {
    for (let j: number = i; j < ((lineCount/2) -1); j++) {
        a += ' ';
    }
    console.log( a + b );
   
    if (i == lineCount/2 - 1 && lineCount % 2 == 0) {
        console.log(a + b);
    }
    b += '**';
    a = ' ';
}

for (let k: number = lineCount/2 + 2; k < lineCount + 1; k++) {
    for (let l: number = k ; l < lineCount; l++) {
        c += '**';
    }
    console.log( d + c );
    d += ' ';
    c = '*';
}
