declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';



// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'


const fileName: string = 'my-file.txt';

const writeToFile = (inputFile: string, content: string): void =>{
    try {
        fs.writeFileSync(fileName, content);
    } catch (error) {
        console.log(error.message);
    }
}

const isWritable = (path: string): boolean => {
    try {
        fs.accessSync(path, fs.constants.W_OK);
        return true;
    } catch (error) {
        return false;
    }
}

if (!isWritable(fileName)) {
    console.log('Unable to write file: ' + fileName);
} else {
    writeToFile(fileName, 'Kányási Soma');
}