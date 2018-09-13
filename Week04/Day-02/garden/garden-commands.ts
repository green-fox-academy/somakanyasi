'use strict';

import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';

let newGarden: Garden = new Garden ();

let newTree1: Tree = new Tree ('purple');
let newTree2: Tree = new Tree ('orange');
let newFlower1: Flower = new Flower ('yellow');
let newFlower2: Flower = new Flower ('blue');

newGarden.addFlowers(newFlower1);
newGarden.addFlowers(newFlower2);

newGarden.addTrees(newTree1);
newGarden.addTrees(newTree2);

//newGarden.printGarden();


newGarden.printStatus();

newGarden.watering(40);
//newGarden.printStatus();

newGarden.watering(70);
//newGarden.printStatus();

//newGarden.watering(0);
