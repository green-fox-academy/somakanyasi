// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let myString: string = 'Semmi értelme a rekurzív dolgoknak.';
let myString2: string = 'banán';


function addStarAfterEveryChar(inputString: string, separator: string): any {
    return inputString.split('').join(separator);
}

console.log(addStarAfterEveryChar(myString, '*'));


function addStarsWithRecursion(inputString: string): string {
    if (inputString.length > 0) {
        return inputString.slice(0, 1) + '*' + addStarsWithRecursion(inputString.slice(1));
    } else {
        return 'The End!';
    }
}

console.log(addStarsWithRecursion(myString));
