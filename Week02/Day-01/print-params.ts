'use strict'


// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)



function printParams (...myParameter: any[]) {
    for ( let i: number = 0; i < myParameter.length; i++) {
        console.log(myParameter[i]);
    }
}
printParams(23, 'szia', 'lécci múkodj', 41);



//ha nem egymás alá szeretnénk kiírni a lista tartalmát akkor nem kell a for loop

function printParams2 (...myParameter: any[]) {
        console.log(myParameter);
}
printParams2(23, 'szia', 'lécci múkodj', 41);