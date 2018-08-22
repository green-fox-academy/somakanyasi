declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


// Create a method that decrypts reversed-lines.txt

function readFromFile (inputFileName: string): string{
  return fs.readFileSync('reversed-lines.txt', charEncoding);
}


function textReversing (inputFile: string) {
  let contentOfFile: string = readFromFile(inputFile);
  let fileToArray: string [] = contentOfFile.split('\n');
  for (let i: number = 0; i < fileToArray.length; i ++){
    fileToArray[i].split('').reverse();
    console.log(fileToArray);
  }
  inputFile = fileToArray.join('');
//  let reversed = inputFile.split('');
//  reversed.reverse();
//  inputFile = reversed.join('');
  return inputFile;
}

console.log(textReversing('reversed-lines.txt'));
