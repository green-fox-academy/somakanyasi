'use strict';

import { Animal } from './animal';
import { Flyable } from './flyable';

export abstract class Bird extends Animal implements Flyable {

  takeOff(): void {
    throw new Error("Method not implemented.");
  }

  landing(): void {
    throw new Error("Method not implemented.");
  }
  
  manouvering?(): void {
    throw new Error("Method not implemented.");
  }

  fly(): void {
    if (this.isHungry) {
      console.log('Nem repülök sehova kishaver! Éhes vagyok!');
    } else {
      console.log('Elrepültem!');
      this.isHungry = true;
    }
  }

}