import { Reservationy } from './reservationy';
import { randomDayGen } from '../../../MyCodes/randomGenerator';
import { randomStringGen } from '../../../MyCodes/randomGenerator';

'use strict';

let daysOfTheWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export class Reservation implements Reservationy {
  
  getDowBooking(): string {
    return randomDayGen(daysOfTheWeek);
  }
  
  getCodeBooking(): string {
    return randomStringGen(8).toUpperCase();
  }

  addReservation() {
    return `Booking# ${randomStringGen(8).toUpperCase()}  for ${randomDayGen(daysOfTheWeek)}`
  }
}