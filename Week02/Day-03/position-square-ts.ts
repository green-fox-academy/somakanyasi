'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawRect(x: number, y: number, side1: number, side2: number) {
    let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.beginPath();
    ctx.fillStyle = rgbRandom;
    ctx.fillRect(x, y, side1, side2);
    ctx.fill();
}

for (let i: number = 0; i< 3; i++) {
    let a: number = Math.floor(Math.random() * canvas.width);
    let b: number = Math.floor(Math.random() * canvas.height);
    let c: number = 50;
    let d: number = 50;
    drawRect(a, b, c, d);
}