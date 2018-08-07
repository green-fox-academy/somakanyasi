'use strict';


// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]


let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches (arr1: string [], arr2: string []) {
    let numberOfListMembers: number;
    let matchedList = [];
    if (arr1.length > arr2.length) {
        numberOfListMembers = arr2.length;
    } else if ( arr1.length < arr2.length) {
        numberOfListMembers = arr1.length;
    } else {
        numberOfListMembers = arr1.length;
    }
    for (let i = 0; i < numberOfListMembers; i++) {
        matchedList.push(arr1[i]);
        matchedList.push(arr2[i]);
    }
    return matchedList;
}

console.log(makingMatches(girls, boys));

export = makingMatches;

