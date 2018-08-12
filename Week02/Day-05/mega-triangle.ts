'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//



let a: number = 10;
let startX: number = 0;
let startY: number = canvas.height ;
let smallTriangleHeight: number = a * Math.pow(3, 0.5);


ctx.beginPath();
for (let i: number = 0; i < canvas.height; i++){
    for (let k: number = 0; k < i; k++){
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX - (a / 2), startY + smallTriangleHeight);
        ctx.lineTo(startX + (a / 2), startY + smallTriangleHeight);
        ctx.lineTo(startX, startY)
        startX = startX + a
    }
}
ctx.stroke();









/*
ctx.beginPath ();
ctx.moveTo(100,550);
ctx.lineTo(500,550);
ctx.lineTo(300,550 - 200 * Math.pow(3, 0.5));
ctx.lineTo(100, 550)
ctx.stroke();
*/
/*
function megaTriangle (input: number){

    let smallTriangleHeight: number = a * Math.pow(3, 0.5);

    for (let i: number = 0; i < 200 * Math.pow(3, 0.5) / smallTriangleHeight; i++){
        ctx.beginPath();
        ctx.moveTo(100 + (i * a / 2), 550 - (i * smallTriangleHeight));
        ctx.lineTo(500 - (i * a / 2), 550 - (i * smallTriangleHeight));
        ctx.stroke();
    }
    
    for (let j: number = 0; j < 400 / a; j++){
        ctx.beginPath();
        ctx.moveTo(500 - (j * a), 550);
        ctx.lineTo(300 - (j * (a / 2)) , (550 - (200 * Math.pow(3, 0.5))) + (j * smallTriangleHeight));
        ctx.stroke();
    }
    
}
megaTriangle(a);
*/