import { Animal } from "./animal";

'use strict';

export class Mammal extends Animal{
  protected havingFur: boolean;
  protected isWarmBlooded: boolean;

  constructor(name: string){
    super(name);
    this.name = name;
    this.havingVertebrate = true;
    this.havingFur = true;
    this.isWarmBlooded = true;
  }

  breastFeeding(){}

  breed(): string {
    return `pushing miniature versions out.`
  }

}