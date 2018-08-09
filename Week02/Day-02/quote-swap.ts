'use strict';


// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
// Expected output: "What I cannot create I do not understand."


let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

//let newVar: any [] = words.splice(2, 1, words[5]);



function quoteSwap(quote: string []){
    quote.splice(2, 1, 'cannot').splice(5, 1, 'do');
    return quote;
}

console.log(quoteSwap(words).join(' '));





//export = quoteSwap;