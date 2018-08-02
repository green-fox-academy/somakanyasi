'use strict'

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 2.4;
let b: number = 3.5;
let c: number = 4.7;

let volume: number = a * b * c;
let surface: number = 2 * ((a*b) + (a*c) + (b*c));

console.log("Surface Area: " + Math.round(surface));
console.log("Volume: " + Math.round(volume));

