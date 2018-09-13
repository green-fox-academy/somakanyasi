'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

/*
function bigStar(xSmall: number, ySmall: number) {
    ctx.beginPath();
    ctx.moveTo(xSmall, ySmall);
    ctx.lineTo(xSmall + 15, ySmall - 5);
    ctx.lineTo(xSmall + 20, ySmall - 20);
    ctx.lineTo(xSmall + 25, ySmall - 5);
    ctx.lineTo(xSmall + 40, ySmall);
    ctx.lineTo(xSmall + 25, ySmall + 5);
    ctx.lineTo(xSmall + 20, ySmall + 20);
    ctx.lineTo(xSmall + 15, ySmall + 5);
    ctx.lineTo(xSmall, ySmall);
    ctx.stroke();
}
bigStar(a, b);
*/



function smallStar(xSmall: number, ySmall: number, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(xSmall, ySmall);
    ctx.lineTo(xSmall + 3, ySmall - 1);
    ctx.lineTo(xSmall + 4, ySmall - 4);
    ctx.lineTo(xSmall + 5, ySmall - 1);
    ctx.lineTo(xSmall + 8, ySmall);
    ctx.lineTo(xSmall + 5, ySmall + 1);
    ctx.lineTo(xSmall + 4, ySmall + 4);
    ctx.lineTo(xSmall + 3, ySmall + 1);
    ctx.lineTo(xSmall, ySmall);
    ctx.fill();
}


function middleStar(xSmall: number, ySmall: number, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(xSmall, ySmall);
    ctx.lineTo(xSmall + 6, ySmall - 2);
    ctx.lineTo(xSmall + 8, ySmall - 8);
    ctx.lineTo(xSmall + 10, ySmall - 2);
    ctx.lineTo(xSmall + 16, ySmall);
    ctx.lineTo(xSmall + 10, ySmall + 2);
    ctx.lineTo(xSmall + 8, ySmall + 8);
    ctx.lineTo(xSmall + 6, ySmall + 2);
    ctx.lineTo(xSmall, ySmall);
    ctx.fill();
}



let c: number = Math.floor(Math.random() * 100);


ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function starryNight(numberOfStars: number) {
    for (let i: number = 0; i < numberOfStars; i++) {
        let a: number = Math.floor(Math.random() * canvas.width);
        let b: number = Math.floor(Math.random() * canvas.height);
        let basicColor = Math.floor(Math.random() * 211);
        let colorsOfStars = `rgb(${basicColor}, ${basicColor}, ${basicColor})`;
        ctx.fillStyle = colorsOfStars;
        smallStar(a, b, colorsOfStars);
    }
    for (let j: number = 0; j < numberOfStars; j++){
        let a: number = Math.floor(Math.random() * canvas.width);
        let b: number = Math.floor(Math.random() * canvas.height);
        let basicColor = Math.floor(Math.random() * 211);
        let colorsOfStars = `rgb(${basicColor}, ${basicColor}, ${basicColor})`;
        ctx.fillStyle = colorsOfStars;
        middleStar(a, b, colorsOfStars);
    }
}

starryNight(c);