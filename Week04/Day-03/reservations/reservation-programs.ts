'use strict';

import { Reservation } from './reservation';

let reservation: Reservation = new Reservation ();

let listOfAllBookings: any [] = [];

for (let i: number = 0; i < 10; i++) {
  listOfAllBookings.push(reservation.addReservation());
}

listOfAllBookings.forEach((element) => {
  console.log(element);
});