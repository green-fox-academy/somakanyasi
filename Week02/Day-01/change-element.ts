'use strict'

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test



let numList: number [] = [1, 2, 3, 8, 5, 6];

//  with the splice method
//  numList.splice(3, 1, 4);
//  console.log(numList[3]);


let newlist: number [] = numList.map(function(element: number){
    return element / 2;
});

console.log(newlist[3]);
