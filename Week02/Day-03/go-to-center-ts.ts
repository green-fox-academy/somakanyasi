'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


function toCenter(x: number, y: number) {
    let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.beginPath();
    ctx.strokeStyle = rgbRandom;
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}

for (let i: number = 0; i < 10; i++) {
    let a: number = Math.floor(Math.random() * canvas.width);
    let b: number = Math.floor(Math.random() * canvas.height);
    toCenter(a, b);
}
