'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');




const canvasWidth: number = canvas.width;
const canvasHeight: number = canvas.height;
const steps: number = 20;


for (let i: number =0; i < canvasWidth; i += steps){
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(i, 0);
    ctx.lineTo(canvasWidth, i + steps);
    ctx.stroke();
}

for (let j: number = 0; j < canvasWidth; j += steps){
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(j + steps, canvasHeight);
    ctx.lineTo(0, j);
    ctx.stroke();
}