'use strict';

import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';

export class Garden {
  private listOfFlowers: Flower[];
  private listOfTrees: Tree[];

  constructor() {
    this.listOfFlowers = [];
    this.listOfTrees = [];
  }

  addFlowers(flower) {
    this.listOfFlowers.push(flower);
  }

  addTrees(tree) {
    this.listOfTrees.push(tree);
  }

  checkForDryingOut(): Plant[] {
    let plantsToWater: Plant[] = [];
    this.listOfFlowers.forEach((flower: Flower) => {
      if (flower.getNeedWater()) {
        plantsToWater.push(flower);
      }
    });
    this.listOfTrees.forEach(function (tree) {
      if (tree.getNeedWater()) {
        plantsToWater.push(tree);
      }
    });
    return plantsToWater;
  }

  watering(theAmountOfWater: number): Plant[] {
    let plantsToWater: any[] = this.checkForDryingOut();
    let amountForOne: number = theAmountOfWater / plantsToWater.length;
    console.log(`Watering with ${theAmountOfWater}`);
    for (let i: number = 0; i < plantsToWater.length; i++) {
      if (plantsToWater[i]['type'] === 'flower' && plantsToWater[i]['waterLevel'] >= 5) {
        plantsToWater[i]['needWater'] = false;
      } else if (plantsToWater[i]['type'] === 'flower' && plantsToWater[i]['waterLevel'] < 5) {
        plantsToWater[i]['waterLevel'] = amountForOne * plantsToWater[i]['waterAbsorb'];
        if (plantsToWater[i]['type'] === 'flower' && plantsToWater[i]['waterLevel'] >= 5) {
          plantsToWater[i]['needWater'] = false;
        }
      } else if (plantsToWater[i]['type'] === 'tree' && plantsToWater[i]['waterLevel'] >= 10) {
        plantsToWater[i]['needWater'] = false;
      } else if (plantsToWater[i]['type'] === 'tree' && plantsToWater[i]['waterLevel'] < 10) {
        plantsToWater[i]['waterLevel'] = amountForOne * plantsToWater[i]['waterAbsorb'];
        if (plantsToWater[i]['type'] === 'tree' && plantsToWater[i]['waterLevel'] >= 10) {
          plantsToWater[i]['needWater'] = false;
        }
      }
    }
    this.printStatus();
    return plantsToWater;
  }

  printStatus() {
    this.listOfFlowers.forEach((element) => {
      if (element['needWater'] === false) {
        console.log(`The ${element['color']} Flower doens't need water`);
      } else {
        console.log(`The ${element['color']} Flower needs water`);
      }
    })

    this.listOfTrees.forEach((element) => {
      if (element['needWater'] === false) {
        console.log(`The ${element['color']} Tree doesn't need water`)
      } else {
        console.log(`The ${element['color']} Tree needs water`);
      }
    })
  }
}