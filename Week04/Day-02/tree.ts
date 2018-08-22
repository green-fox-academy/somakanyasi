'use strict';

export class Tree {
  private color: string;
  private curerntWaterLevel: number;
  private treesWaitingForWater: number [];

  constructor(color: string, currentWaterLevel: number) {
    if (color === 'purple' || color === 'orange') {
      this.color = color;
    } else {
      throw new Error ('No no no... You can only choose purple or orange as a color, you dummie');
    }
    this.curerntWaterLevel = currentWaterLevel;
  }

  getCurrentWaterLevelForTrees(){
    if (this.curerntWaterLevel < 5) {
      
    }
    return this.curerntWaterLevel;
  }
}

let tree1: Tree = new Tree('purple', 10);
let tree2: Tree = new Tree('orange', 15);


console.log(tree1);
console.log(tree2);
