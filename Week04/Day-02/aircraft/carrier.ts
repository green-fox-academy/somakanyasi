'use strict';

import { Aircraft } from './aircrafts';

export class Carrier {
  protected name: string;
  protected healthPoints: number;
  protected ammoStorage: number;
  protected aircrafts: Aircraft [];
  protected totalDamage: number;

  constructor(name: string, healthPoints: number, ammoStorage: number){
    this.name = name;
    this.healthPoints = healthPoints;
    this.ammoStorage = ammoStorage;
    this.aircrafts = [];
  }

  add(){}

  fill(){}

  fight(){}
}