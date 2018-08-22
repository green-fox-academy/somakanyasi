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
}