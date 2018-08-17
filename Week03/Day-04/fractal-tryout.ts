'use strict';

declare function require(path: string): any;

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

let angle: number = 0;

ctx.rotate(45 * Math.PI / 180);

ctx.translate(canvas.width/2, canvas.height/2);

let theLoop = (angle) => {
  setTimeout(function () {
    ctx.rotate(angle * Math.PI / 180);
    ctx.strokeRect(-50 + angle, -50, 100, 100);
    angle += 0.746;
    ctx.strokeStyle = 
    theLoop(angle);
  }, 31);
};

theLoop(angle);