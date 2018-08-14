declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, charEncoding);
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function countLines (inputFile: string): number {
    const fileContent: string [] = readFromFile(inputFile).split('\n');
    let counter: number = 0;
    if (fs.existsSync(inputFile)){
        fileContent.forEach(elem => {
            counter++
        })
        console.log(counter);
    } else {
        return 0;
    }
}

countLines('my-file.txt');