//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`


let myArray: number [] = [1, 11, 34, 11, 52, 61, 1, 34];

function onlyUnique(value, index, arr){
    return arr.indexOf(value) === index;
}

let uniqueList = myArray.filter(onlyUnique);
console.log(uniqueList.sort());


