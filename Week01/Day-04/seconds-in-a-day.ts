'use strict'

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// 1 day = 86400sec

let currentTime: number = 42 + (34*60) + (14*3600);

console.log(86400-currentTime);
