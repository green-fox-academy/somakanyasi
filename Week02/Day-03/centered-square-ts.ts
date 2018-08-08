'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.


let a: number = Math.floor(Math.random() * canvas.height);
let rgbRandom = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;


ctx.beginPath();
ctx.fillStyle = rgbRandom;
ctx.fillRect(canvas.width / 2 - a / 2, canvas.height / 2 - a / 2, a, a);
ctx.fill();