'use strict';

// Draw the wall
const wall = document.getElementById('wall') as HTMLImageElement;
const wallCoord: any[] = [];

const line = readFromFile('level1.csv').split('\n');

line.forEach((element) => {
  wallCoord.push({ coordX: element.split(',')[0], coordY: element.split(',')[1] });
});

wallCoord.forEach((element) => {
  ctx.drawImage(wall, element.coordX * tileSize, element.coordY * tileSize);
});

