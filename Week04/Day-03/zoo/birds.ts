import { Egglayers } from "./egg-layers";

'use strict';

export class Bird extends Egglayers {
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

  fly(){};

  feedingFromBeak(){};

}

