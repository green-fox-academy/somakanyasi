'use struct';

import { Animal } from './animal';

export class Zoo {
  private animals: Animal[];
  private name: string;
  private yearOfFounding: number;

  constructor(name: string, yearOfFournding: number) {
    this.name = name;
    this.yearOfFounding = yearOfFournding;
    this.animals = [];
  }

  addAnimal(animal: Animal){
    this.animals.push(animal);
  }

  breedAll(){
    let babyAnimals: Animal [] = this.animals.map(a => a.breed());
    this.animals.concat(babyAnimals);
  }

  log(){
    console.log(`This zoo has ${this.animals.length} animal(s). Their names are: `);
    this.animals.forEach(a => a.introduce());
  }
}