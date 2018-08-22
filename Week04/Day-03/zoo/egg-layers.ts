import { Animal } from "./animal";

'use strict';

export abstract class Egglayers extends Animal {
  
  breedWithEggs(): string {
    return 'laying eggs';
  }

}