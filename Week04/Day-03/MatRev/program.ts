'use strict';

import { Animal } from "./animal";
import { Meerkat } from "./meerkat";
import { Zoo } from "./zoo";
import { Lion } from "./lion";
import { Tucan } from "./tucan";
import { Drone } from "./drone";
import { Flyable } from "./flyable";
import { Bird } from "./bird";


let zoo: Zoo = new Zoo('Fővárosi Állat és Növénykert', 2018);


let myMeerkat: Animal = new Meerkat('Timon', 2000, false);
let myLion: Animal = new Lion('Mufasa', 2000);
let myTucan: Animal = new Tucan('Zazu', 2010, false);


zoo.addAnimal(myMeerkat);
zoo.addAnimal(myLion);
zoo.addAnimal(myTucan);
zoo.log();

let myOtherTucan: Tucan = new Tucan('Zuza', 2011, true);
let myDrone: Drone = new Drone();

let listOfFlyableThings: Flyable [] = [];
listOfFlyableThings.push(myOtherTucan);
listOfFlyableThings.push(myDrone);

listOfFlyableThings.forEach(o => {
  if(o.manouvering) {
    o.manouvering();
  }
});