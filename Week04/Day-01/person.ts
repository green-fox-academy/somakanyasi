'use strict';

export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female'){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce(){
    console.log(this.getIntroduction + '.');
  }
  getIntroduction(){
    return `Hi I'm ${this.name}, a ${this.age} year old ${this.gender}`
  }
  getGoal(){
    console.log('My goal is: Live for the moment!');
  }
}




// ha a constructor-t nem így akarjuk beállítani defaultra akkor lehet a paraméterek után ?-t tenni 
// és így pl amikor új persont veszünk fel akkor nem feltétlenül kell mindhárom változót mindenképpen megadni.
