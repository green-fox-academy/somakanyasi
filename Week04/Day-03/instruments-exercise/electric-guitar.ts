import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class ElectricGuitar extends StringedInstrument {
  protected soundOfTheInstrument: string;


  constructor(numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.soundOfTheInstrument = 'Twang';
    this.name = 'Electric guitar';
  }

  play() {
    return `${super.play()} which makes the sound: ${this.soundOfTheInstrument}.`
  }
}