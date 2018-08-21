'use strict';

import { Person } from "./person";

export class Mentor extends Person {
  private level: string;

  constructor(name: string, age: number, gender: string, level: string = 'intermediate'){
    super(name, age, gender);
    this.level = level;
  }

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
  introduce(){
    console.log(super.getIntroduction() + `${this.level} mentor.`);
  }
}