'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let x: number = 20;

function purpleSteps (size: number) {
    for (let i: number = 1; i < canvas.height; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(i * size, i* size, size, size)
    }
}

purpleSteps(x);