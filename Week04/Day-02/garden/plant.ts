'use strict';

export class Plant {
  protected type: string;
  protected color: string;
  protected waterLevel: number;
  protected needWater: boolean;
  protected waterAbsorb: number;

  constructor(color: string, type: string, waterLevel: number, needWater: boolean, waterAbsorb: number){
    this.type = type;
    this.color = color;
    this.waterLevel = waterLevel;
    this.waterAbsorb = waterAbsorb;
    this.needWater = needWater;
  }
  getNeedWater(): boolean {
    return this.needWater;
  }
}