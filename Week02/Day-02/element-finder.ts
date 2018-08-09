'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"


const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containingSeven (input: any []) {
    if (input.indexOf(7) === -1){
        console.log('Noooooo');
    } else {
        console.log('Hooorray');
    }
}

containingSeven(numbers);


// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!


//with the 'every' function
function includingSeven (eachElement){
    return eachElement !== 7;
}

console.log(numbers.every(includingSeven));



//with the some function
let answer = function(element){
    return element == 7;
}

console.log(numbers.some(answer));