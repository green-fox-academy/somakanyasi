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

  getColor(): string {
    return this.color;
  }
  
  getWaterLevel(): number {
    return this.waterLevel;
  }

  getNeedWater(): boolean {
    return this.needWater;
  }
  
  getWaterAbsorb(): number {
    return this.waterAbsorb;
  }

  setWaterLevel(waterLevel: number): void {
    this.waterLevel = waterLevel;
  }

  setNeedWater(needWater: boolean): void {
    this.needWater = needWater;
  }
  
}