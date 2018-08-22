import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class Violin extends StringedInstrument {
  protected soundOfTheInstrument: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.soundOfTheInstrument = 'Screech';
    this.name = 'Violin';
  }

  play() {
    return `${super.play()} which makes the sound: ${this.soundOfTheInstrument}.`
  }


  //other solution
  /*
  sound() {
    console.log(`${this.name} a ${this.numberOfString} stringed instrument, which makes the sound: ${this.soundOfTheInstrument}`)
  }
  */
}