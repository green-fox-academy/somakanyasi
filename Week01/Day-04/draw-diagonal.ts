'use strict';

let lineCount: number = 14;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let a: string = '%';
let b: string = ' ';
let line: string ='';

for (let i: number = 0; i <= lineCount; i++) {
    for (let j: number = 0; j <= lineCount; j++){
        if (i == 0 || i == lineCount || j == 0 || j == lineCount || i == j) {
            line = line + a;
        } else {
            line = line + b;
        }
    }
    console.log(line);
    line='';
}