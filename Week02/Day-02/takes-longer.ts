'use strict';


// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"


let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let additionalString: string = 'always takes longer than '

function fullQuote (input1: string, input2: string): string {
    let completeQuote = input1.substr(0, 21).concat(input2).concat(input1.substr(21, input1.length));
    return completeQuote;
}


console.log(fullQuote(quote, additionalString));