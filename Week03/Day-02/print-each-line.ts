declare function require(path: string): any;
'use strict'
export { };

const fs = require('fs');
const charEncoding = 'utf-8';


// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'


// write a new txt file with line breaks
function writeToAFile(fileName: string, data: any): void {
    fs.writeFileSync(fileName, data);
}

writeToAFile('my-file.txt', 'This is my made up file \nThe second row is always the best \nNot to mention the 3rd and the 4th \nokay....I stopped');


//read content from a file
function readFromFile(fileToRead: string): string {
    return fs.readFileSync(fileToRead, charEncoding);
}
//console.log(readFromFile('my-file.txt',));


function printEachLines (inputText: string, charCode: string){
    try {
        if (fs.existsSync(inputText)) {
            console.log(readFromFile(inputText));
        } else {
            throw new Error('Unable to read the file: my-file.txt');
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

printEachLines('my-file.txt', charEncoding);
