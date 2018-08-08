'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]


let magicBox: any [][] = [[10, 10], [290,  10], [290, 290], [10, 290]];

function connectTheDots(input: any [][]){
    for ( let i: number = 0; i < input.length; i++){
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(input[i][i],input[i][i + 1]);
        ctx.lineTo(input[i][0], input[0][i]);
        ctx.stroke();
    }
}

connectTheDots(magicBox);