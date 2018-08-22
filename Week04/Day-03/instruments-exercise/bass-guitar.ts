import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class BassGuitar extends StringedInstrument {
  soundOfTheInstrument: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.soundOfTheInstrument = 'Duum-duum-duum';
    this.name = 'Bass guitar';
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