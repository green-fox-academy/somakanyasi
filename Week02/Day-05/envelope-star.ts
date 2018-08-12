'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let steps: number = 15;
let chosenColor = 'green';


function envelopeStar(input: number, color: string) {
    for (let i: number = 0; i < canvasWidth / 2; i += steps) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(canvasWidth / 2 - i, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, i);
        ctx.moveTo(canvasWidth / 2 - i, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, canvasHeight - i);
        ctx.stroke();
    }

    for (let j: number = steps; j < canvasWidth / 2; j += steps) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(canvasWidth / 2 + j, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, j);
        ctx.moveTo(canvasWidth / 2 + j, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, canvasHeight - j);
        ctx.stroke();
    }
}
 envelopeStar(steps, chosenColor);