'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let x: number = 20;
let coordinate: number = x;

function purpleSteps (size: number) {
    for (let i: number = 0; i < canvas.height; i++) {
        ctx.strokeStyle = 'black';
        ctx.strokeRect(coordinate, coordinate, size * i, size * i);
        ctx.fillStyle = 'purple';
        ctx.fillRect(coordinate, coordinate, size * i, size * i);
        coordinate += i * size;
    }
}

purpleSteps(x);