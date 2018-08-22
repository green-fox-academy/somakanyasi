'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected havingVertebrate: boolean;

  constructor(name: string, age?: number, gender?: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.havingVertebrate = true;
  }

  getName(): string{
    return this.name;
  }

  abstract breed(): void;

  eat() {};

  drink() {};

  sleep() {};
}