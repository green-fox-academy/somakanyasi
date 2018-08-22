'use strict';

export class Flower {
  private color: string;
  private curerntWaterLevel: number;
  private treesWaitingForWater: number [];

  constructor(color: string, currentWaterLevel: number) {
    if (color === 'yellow' || color === 'blue') {
      this.color = color;
    } else {
      throw new Error ('You can only choose yellow or blue flowers.');
    }
    this.curerntWaterLevel = currentWaterLevel;
  }
  
  getCurrentWaterLevelForFlowers(){
    return this.curerntWaterLevel;
  }
}

let flower1: Flower = new Flower('yellow', 20);
let flower2: Flower = new Flower('blue', 30);

console.log(flower1);
console.log(flower2);


console.log(flower1.getCurrentWaterLevelForFlowers());

