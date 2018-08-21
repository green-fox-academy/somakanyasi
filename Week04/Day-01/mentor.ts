'use strict';

import { Person } from "./person";

export class Mentor extends Person {
  private level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
    super(name, age, gender);
    this.level = level;
  }

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }

  introduce(){
    console.log(`${super.getIntroduction()} ${this.level} mentor.`);
  }
}