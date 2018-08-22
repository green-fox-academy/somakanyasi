import { Instrument } from "./instruments";

'use strict';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  
  sound(){
    return `a ${this.numberOfStrings} stringed instrument`
  };

  play(){
    return `${this.name} ${this.sound()}`;
  }
}