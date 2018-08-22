'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


function everythingToCenter(x: number, y: number) {
    let dist = 20;
    for (let i: number = 0; i < canvas.width / dist; i++) {
        ctx.beginPath();
        ctx.moveTo(x + (dist * i), y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    for (let j: number = 0; j < canvas.height / dist; j++) {
        ctx.beginPath();
        ctx.moveTo(x, y + (dist * j));
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    for (let k: number = 0; k < canvas.height / dist; k++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width, y + (dist * k));
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
    for (let i: number = 0; i <= canvas.width / dist; i++) {
        ctx.beginPath();
        ctx.moveTo(x + (dist * i), canvas.height);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
    }
}
everythingToCenter(0, 0);