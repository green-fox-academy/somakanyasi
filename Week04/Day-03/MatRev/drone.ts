import { Flyable } from "./flyable";

'use strict';

export class Drone implements Flyable {

  fly(): void {
    console.log(`zummzumm I'm flying`);
    }  
  
  takeOff(): void {
    console.log(`zummzumm I'm taking off`);
  }

  landing(): void {
    console.log(`zummzumm I'm landing`);
  }
}