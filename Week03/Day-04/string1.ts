// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function makingYsOutOfXs(inputString: string, xLetters: string, yLetters: string): string {
    if (inputString.indexOf(xLetters) === -1) {
        return inputString;
    } else {
        inputString = inputString.replace(xLetters, yLetters);
        return makingYsOutOfXs(inputString, xLetters, yLetters);
    }
}

console.log(makingYsOutOfXs('xoxoxoxoxo', 'x', 'y'));
