declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful



const fileToCopyFrom: string = 'my-file.txt';
const fileToCopyTo: string = 'copied-file.txt';


function copyFiles(inputFile: string, copiedFile: string) {
    let didWeCopy: boolean = true;
    try {
        fs.writeFileSync(copiedFile, fs.readFileSync(inputFile, charEncoding));
        console.log(didWeCopy);
    } catch (error){
        didWeCopy = false;
        console.log(didWeCopy);
    }
}

copyFiles(fileToCopyFrom, fileToCopyTo);