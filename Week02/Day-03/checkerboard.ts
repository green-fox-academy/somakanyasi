'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let a: number = 5;


function checkerBoard(size: number) {
    for (let i: number = 0; i < canvas.width; i++) {
        for (let j: number = 0; j < canvas.width; j++) {
            if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
                ctx.fillRect(i * size, j * size, size, size);
            }
        }
    }
}

checkerBoard(a);

