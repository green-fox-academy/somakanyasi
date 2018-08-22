import { Animal } from "./animal";

'use strict';

export class Egglayers extends Animal {
  breed(): string {
    return this.breedWithEggs();
  }
  
  breedWithEggs(): string {
    return 'laying eggs';
  }
}