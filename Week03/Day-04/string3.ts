// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let myString: string = 'Semmi értelme a rekurzív dolgoknak.';

function addStarAfterEveryChar(inputString: string, separator: string): any {
    return inputString.split('').join(separator);
}

console.log(addStarAfterEveryChar(myString, '*'));
