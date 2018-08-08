'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.


ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(50, 50);
ctx.lineTo(50, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(50, 250);
ctx.lineTo(300, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(300, 250);
ctx.lineTo(300, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.moveTo(300, 50);
ctx.lineTo(50, 50);
ctx.stroke();