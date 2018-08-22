'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;
let steps: number = 17;
let chosenColor = 'blue';


function envelopeStar(input: number, color: string) {
    for (let i: number = 0; i < canvasWidth / 2; i += steps) {
        ctx.beginPath();
        color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.strokeStyle = color;
        ctx.moveTo(canvasWidth / 2 - i, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, i);
        ctx.moveTo(canvasWidth / 2 - i, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, canvasHeight - i);
        ctx.stroke();
    }

    for (let j: number = steps; j < canvasWidth / 2; j += steps) {
        ctx.beginPath();
        color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.strokeStyle = color;
        ctx.moveTo(canvasWidth / 2 + j, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, j);
        ctx.moveTo(canvasWidth / 2 + j, canvasHeight / 2);
        ctx.lineTo(canvasWidth / 2, canvasHeight - j);
        ctx.stroke();
    }
}
 envelopeStar(steps, chosenColor);