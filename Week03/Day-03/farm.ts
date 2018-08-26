'use strict';

import { Animal } from './animal'

export class Farm {
  public listOfAnimals: Animal [];
  public maximumSloth: number;
  public freeSloths: number;

  constructor (maximumSloth: number = 15) {
    this.listOfAnimals = [];
    this.maximumSloth = maximumSloth;
  }

  add(animal: Animal) {
    this.listOfAnimals.push(animal);
  }

  breed(animal: Animal) {
    if(this.freeSloths !== 0) {
      let newAnimal: Animal = new Animal(`${animal.nameOfTheAnimal}'s baby`);
      this.listOfAnimals.push(newAnimal);
      this.freeSloths --;
    } else {
      console.log(`You don't have any free sloths left.`);
    }
  }

  slaughter() {
    let index: number = 0;
    for(let i: number = 0; i < this.listOfAnimals.length; i++) {
      let leastHungryAnimal: Animal = this.listOfAnimals[index];
      let currentAnimal: Animal = this.listOfAnimals[i];
      if (currentAnimal.hunger < leastHungryAnimal.hunger) {
        index = i;
      }
    }
    this.listOfAnimals.splice(index, 1);
    this.freeSloths ++;
  }
}

let myFarm: Farm = new Farm();

let rézfszúBagoly: Animal = new Animal ('Rézf*szú Bagoly');
let yeti: Animal = new Animal ('Yeti');

myFarm.add(rézfszúBagoly);
myFarm.add(yeti);

myFarm.breed(rézfszúBagoly);
myFarm.breed(yeti);
myFarm.breed(rézfszúBagoly);
myFarm.breed(yeti);

yeti.play();
rézfszúBagoly.eat();

myFarm.slaughter();

console.log(myFarm.listOfAnimals);
