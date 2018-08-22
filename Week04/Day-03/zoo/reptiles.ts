import { Egglayers } from "./egg-layers";

'use strict';

export class Reptile extends Egglayers {
  protected havingScale: boolean;
  protected haveATail: boolean;

  constructor(name: string){
    super(name);
    this.havingScale = true;
    this.haveATail = true;
  }

  thermoRegulate(){}

  breed(): string {
    return this.breedWithEggs();
  }
}