import { Plant } from "./plant";

'use strict';

export class Flower extends Plant {
  constructor(color: string, type: string = 'flower', waterLevel: number = 0, needWater: boolean = true, waterAbsorb: number = 0.75) {
    super(color, type, waterLevel, needWater, waterAbsorb);
    if (color === 'yellow' || color === 'blue') {
      this.color = color;
    } else {
      throw new Error ('You can only choose yellow or blue flowers buddy.');
    }
    if (this.waterLevel <= 5) {
      this.needWater = true;
    } else {
      this.needWater = false;
    }
  }

  getFlowerColor() {
    if (this.color = 'yellow') {
      return 'yellow';
    } else {
      return 'blue'
    }
  }
}
