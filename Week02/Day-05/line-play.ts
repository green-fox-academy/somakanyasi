'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH THE CODE ABOVE!!!


let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let steps: number = 20;

function linePlay(input: number) {
    for (let i: number = 0; i < canvasWidth; i += input) {
        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.moveTo(i, 0);
        ctx.lineTo(canvasWidth, i + input);
        ctx.stroke();
    }

    for (let j: number = 0; j < canvasWidth; j += input) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(j + input, canvasHeight);
        ctx.lineTo(0, j);
        ctx.stroke();
    }
}

linePlay(steps);