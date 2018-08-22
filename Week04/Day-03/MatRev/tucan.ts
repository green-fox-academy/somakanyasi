'use strict';

import { Animal } from './animal';
import { Bird } from './bird';

export class Tucan extends Bird {

  introduce(): void {
    console.log(`csipcsip.. My name is ${this.name}`);
  }

  eat(): void {
    this.isHungry = false;
    console.log('csipeget');
  }

  play(): void {
    console.log('jaccizik a tukán');
  }

  breed(): Animal {
    console.log('hoppá egy tojás');
    return new Tucan('kistukán', 2010, false);
  }
}