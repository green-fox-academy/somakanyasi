'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


/*
function threeSquares (size: number) {
    let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.fillStyle = rgbRandom;
    ctx.fillRect(canvas.width / 2 - size/2, canvas.height / 2 - size/2, size, size);
}

for (let i: number = 1; i <= 3; i++){
    let a: number = 300 / i;
    threeSquares(a);
}
*/


let a: number = 300;
function threeSquares (num: number) {
    for (let i: number = 1; i <= 3; i++) {
        let size = num / i;
        let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.fillStyle = rgbRandom;
        ctx.fillRect(canvas.width / 2 - size/2, canvas.height / 2 - size/2, size, size);
    }
}
threeSquares(a);
