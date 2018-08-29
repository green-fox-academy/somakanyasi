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
        //console.log(`The ${flower.getColor()} Flower needs water`);
      }
    });
    this.listOfTrees.forEach(function (tree) {
      if (tree.getNeedWater()) {
        plantsToWater.push(tree);
        //console.log(`The ${tree.getColor()} Tree needs water`);
      }
    });
    //console.log(plantsToWater);
    return plantsToWater;
  }

  watering(theAmountOfWater: number): Plant[] {
    let plantsToWater: any[] = this.checkForDryingOut();
    let newPlantsToWater: Plant[];
    let amountForOne: number = theAmountOfWater / plantsToWater.length;
    console.log(amountForOne)
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
    //console.log(plantsToWater);
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