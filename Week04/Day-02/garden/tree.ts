import { Plant } from "./plant";

'use strict';

export class Tree extends Plant {
  constructor(color: string, type: string = 'tree', waterLevel: number = 0, needWater: boolean = true, waterAbsorb: number = 0.4) {
    super(color, type, waterLevel, needWater, waterAbsorb);
    if (color === 'purple' || color === 'orange') {
      this.color = color;
    } else {
      throw new Error ('You can only choose purple or orange flowers buddy.');
    }
    if (this.waterLevel < 10) {
      this.needWater = true;
    } else {
      this.needWater = false;
    }
  } 
}