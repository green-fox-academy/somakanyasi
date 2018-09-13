'use strict';

import { Aircraft } from './aircrafts';

export class F16 extends Aircraft {
  protected maxAmmo: number;

  constructor(type: string = 'F16', baseDamage: number = 30){
    super(type, baseDamage);
    this.maxAmmo = 8;
  }

  
}