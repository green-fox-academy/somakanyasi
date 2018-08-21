'use strict';

import { Person } from "./person";


export class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School Of Life'){
    super(name, age, gender);    // ha a zárójelben nincs semmi akkor a person class default-ját örökli meg
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;     //ha itt hozzuk létre a default értéket akkor utána amikor létre hozunk új studentet akkor ezt nem tudjuk módosítani
  }

  getGoal(){
    console.log('Be a junior software developer');
  }
  introduce(){
    console.log(`${super.getIntroduction()} from ${this.previousOrganization}, who skipped ${this.skippedDays} days from the course already.`);
  }
  skipDays(numberOfDays){
    this.skippedDays += numberOfDays;
  }
}

