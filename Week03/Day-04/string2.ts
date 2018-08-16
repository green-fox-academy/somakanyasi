// Given a string, compute recursively a new string where all the 'x' chars have been removed.


function theCharRemover(inputString: string, inputChar: string) {
    if (inputString.indexOf(inputChar) === -1) {
        return inputString;
    } else {
        inputString = inputString.replace(inputChar, '');
        return theCharRemover(inputString, inputChar);
    }
}

console.log(theCharRemover('xOxO', 'x'));
