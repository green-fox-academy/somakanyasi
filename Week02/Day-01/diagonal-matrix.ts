'use strict'


// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


let matrix: number [] [] = [];
let numberOfLines: number = 5;

for (let i = 0; i < numberOfLines; i++) {
    matrix[i]=[]
    for (let j = 0; j < numberOfLines; j++) {
        if (j===numberOfLines-i-1) {
            matrix[i][j]=1;
        } else {
            matrix[i][j]=0;
        }
    }
}

console.log(matrix);