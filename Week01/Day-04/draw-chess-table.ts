'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let a: string = 'X';
let b: string = ' ';
let line: string = '';

for (let i: number = 0; i < 8; i++) {
    for (let j: number = 0; j < 8; j++) {
        if (i % 2 == 1 && j % 2 == 1 || i % 2 == 0 && j % 2 == 0) {
            line = line + a;
        } else {
            line = line + b;
        }
    }
    console.log(line);
    line = '';
}
