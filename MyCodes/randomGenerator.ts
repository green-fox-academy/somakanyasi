'use strict';

let daysOfTheWeek: string [] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export function randomDayGen (daysOfTheWeek: string []): string {
  let randomNumber: number = randomNumGen(0, 6);
  return daysOfTheWeek[randomNumber];
};

export function randomNumGen (min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

export function randomStringGen (stringLength: number) {
  let randomString = Math.random().toString(36).substr(2, stringLength);
  return randomString;
}