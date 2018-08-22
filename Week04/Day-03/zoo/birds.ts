import { Egglayers } from "./egg-layers";
import { Flyable } from "../flyable/flyable";

'use strict';

export class Bird extends Egglayers implements Flyable {
  protected havingFeather: boolean;
  protected isWarmBlooded: boolean;
  
  constructor(name: string){
    super(name);
    this.name = name;
    this.havingVertebrate = true;
    this.havingFeather = true;
    this.isWarmBlooded = true;
  }
  
  breed() {
    return this.breedWithEggs();
  }
  
  
  takeOff(): void {
    console.log('Kabbe gyíkok.. én leléptem!');
  }

  fly(): void {
    console.log('Repülööööök!!');
  };

  land(): void {
    console.log('Ohh...Áhh...Pfffasktdbalawjehbf.... F*ck');
  }
  
  feedingFromBeak(){};
}

