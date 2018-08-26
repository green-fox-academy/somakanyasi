'use strict';

import { Sharpie } from './sharpie';

export class SharpieSet {
  public listOfSharpies: Sharpie [];

  constructor () {
    this.listOfSharpies = [];
  }

  countUsable(){
    let usableSharpies: number = 0;
    for (let i: number = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].getInkAmount() > 0) {
        usableSharpies ++;
      }
    
    }
    return usableSharpies;
  }

  removeTrash() {
    for (let j: number = 0; j < this.listOfSharpies.length; j++) {
      if (this.listOfSharpies[j].getInkAmount() === 0) {
        this.listOfSharpies.splice(j, 1);
        j--;
      }
    }
    return this.listOfSharpies;
  }
}

let sharpieSet: SharpieSet = new SharpieSet ();

let colorPalette: string [] = ['black', 'green', 'blue', 'yellow', 'red', 'purple', 'orange', 'brown'];

for (let k: number = 0; k < 10; k++) {
  sharpieSet.listOfSharpies[k] = new Sharpie (colorPalette[Math.floor(Math.random() * 7)], 10 + Math.floor(Math.random() * 10));
}

console.log(sharpieSet);

//using one sharpie

for(let l: number = 0; l < 100; l++) {
  sharpieSet.listOfSharpies[0].use();
}

console.log(sharpieSet.countUsable());

sharpieSet.removeTrash();
console.log(sharpieSet);


