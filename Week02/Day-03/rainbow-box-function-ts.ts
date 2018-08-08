'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


let colors: string [] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

let a: number = canvas.height;
let distance: number = 20;

function rainbowBoxes (input: number, color: string) {
    let period = a / distance;
    for (let i: number = 0; i < period; i++) {
        let size = input - (i * distance);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(canvas.width / 2 - size/2, canvas.height / 2 - size/2, size, size);
    }
}
rainbowBoxes(a, colors[0]);