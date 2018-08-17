'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

let side: number = canvasWidth / 3;
ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvasWidth, canvasHeight)

function drawSquares(xCoordinate: number, yCoordinate: number, side: number, period: number) {
  if (period > 0) {
    ctx.strokeRect(xCoordinate, yCoordinate, side, side);
    ctx.strokeRect(xCoordinate + side, yCoordinate + side, side, side);
    ctx.strokeRect(xCoordinate - side, yCoordinate + side, side, side);
    ctx.strokeRect(xCoordinate, yCoordinate + side * 2, side, side);

    side = side / 3;
    drawSquares(xCoordinate + side, yCoordinate, side, period -1);
    drawSquares(xCoordinate + (side * 4), yCoordinate + (side * 3), side, period - 1);
    drawSquares(xCoordinate - (side * 2), yCoordinate + (side * 3), side, period - 1);
    drawSquares(xCoordinate + side, yCoordinate + (side * 6), side, period -1);
  }
}

drawSquares(side, 0, side, 5);