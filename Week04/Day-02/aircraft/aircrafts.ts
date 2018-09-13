'use strict';

export class Aircraft {
  protected type: string;
  protected ammoLevel: number;
  protected baseDamage: number;
  
  constructor (type: string, baseDamage: number) {
    this.type = type;
    this.baseDamage = baseDamage;
    this.ammoLevel = 0;
  }

  fight(){
    let currentDamage: number = this.ammoLevel * this.baseDamage;
    this.ammoLevel = 0;
    return currentDamage;
  };

  refill(){

  };

  getType(){
    return this.type;
  };

  getStatus(){
    return `Type: ${this.type}, Ammo: ${this.ammoLevel}, Base Damage: ${this.baseDamage}, All Damage: ${this.getAllDamage()}`
  };

  isPriority(){};

  getAllDamage(){
    return this.ammoLevel * this.baseDamage;
  }
}