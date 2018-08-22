import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

'use strict';

export class Helicopter extends Vehicle implements Flyable {
  protected powerInNm: number;

  constructor(name: string) {
    super(name);
  }

  takeOff(): void {
    console.log(`Ready for take off..`);
  }  
  
  fly(): void {
    console.log(`We are currently flying.`);
  }
  
  land(): void {
    console.log(`Ready for landing..`);
  }
}