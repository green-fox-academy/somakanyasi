'use strict';


// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"


let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function elementFinder(input: number []){
    if (input.indexOf(4) !== -1 && input.indexOf(8) !== -1 && input.indexOf(12) !== -1 && input.indexOf(16) !== -1) {
        console.log('TRUE');
    } else {
        console.log('FALSE')
    }
}
elementFinder(listOfNumbers);

function newChecker(input: number[]) {
    let numbersToCheck: number [] = [4, 8, 12, 16]
    if (numbersToCheck.every(e => input.indexOf(e) > -1)) {
        return true
    } else {
        return false
    }
}

newChecker(listOfNumbers)
