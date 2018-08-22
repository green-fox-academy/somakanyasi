'use strict';

import { Flyable } from './flyable';
import { Vehicle } from './vehicle';
import { Helicopter } from './helicopter';


let newChopper: Helicopter = new Helicopter('Apache-11');

newChopper.takeOff();
newChopper.fly();
newChopper.land();