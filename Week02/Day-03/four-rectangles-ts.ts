'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRect(x: number, y: number, side1: number, side2: number) {
    let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.beginPath();
    ctx.fillStyle = rgbRandom;
    ctx.fillRect(x, y, side1, side2);
    ctx.fill();
}

for (let i: number = 0; i< 4; i++) {
    let a: number = Math.floor(Math.random() * canvas.width);
    let b: number = Math.floor(Math.random() * canvas.height);
    let c: number = Math.floor(Math.random() * canvas.width);
    let d: number = Math.floor(Math.random() * canvas.height);
    
    drawRect(a, b, c, d);
}