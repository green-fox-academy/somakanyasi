'use strict';

import { Animal } from './animal';
import { Bird } from './bird';


export class Sparrow extends Bird {
  
  eat(): void {
    throw new Error("Method not implemented.");
  }  
  
  play(): void {
    throw new Error("Method not implemented.");
  }
  
  breed(): Animal {
    throw new Error("Method not implemented.");
  }


}