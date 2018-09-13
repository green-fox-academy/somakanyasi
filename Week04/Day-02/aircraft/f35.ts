'use strict';

import { Aircraft } from './aircrafts';

export class F35 extends Aircraft {
  protected maxAmmo: number;

  constructor(type: string = 'F35', baseDamage: number = 50){
    super(type, baseDamage);
    this.maxAmmo = 12;
  }

  
}