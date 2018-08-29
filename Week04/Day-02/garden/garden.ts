'use strict';

import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';

export class Garden {
  private listOfFlowers: Flower [];
  private listOfTrees: Tree [];

  constructor(){
    this.listOfFlowers = [];
    this.listOfTrees = [];
  }

  addFlowers(flower) {
    let newFlower: Flower = new Flower (flower);
    this.listOfFlowers.push(newFlower);
  }

  addTrees(tree) {
    let newTree: Tree = new Tree (tree);
    this.listOfTrees.push(newTree);
  }

  checkForDryingOut() {
    let plantsToWater: any [] = [];
    this.listOfFlowers.forEach(function(flower: Flower){
      if (flower.getNeedWater()) {
        plantsToWater.push(flower);
        let asd = flower as Flower;
        console.log(`The ${asd.getFlowerColor()} Flower needs water`);
      }
    });
    this.listOfTrees.forEach(function(tree){
      if (tree.getNeedWater()) {
        plantsToWater.push(tree);
        console.log(`The ${tree.getColor().toString()} Tree needs water`);
      }
    });
    return plantsToWater;
    
  }

  watering (theAmountOfWater: number) {
    let amountForOne: number = theAmountOfWater / this.checkForDryingOut().length;
    this.checkForDryingOut().forEach((element) => {
      element.setWaterlevel(amountForOne * element.getWaterAbsorb());
    });
  }

  printGarden() {
    console.log(`In my garden there are these flowers: ${this.listOfFlowers}
    and these trees: ${this.listOfTrees}`);
  }
}

