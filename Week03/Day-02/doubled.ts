declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


// Create a method that decrypts duplicated-chars.txt


function readFromFile (inputFileName: string): string{
  return fs.readFileSync('doubled.txt', charEncoding);
}

function doubleLetterDecryption (inputFileName: string) {
  let contentOfTheFile: string = readFromFile(inputFileName);
  let fileToArray: string [] = contentOfTheFile.split('');
  for (let i: number = 0; i < fileToArray.length; i +=2) {
    fileToArray[i] = '';
  }
  let decryptedText = fileToArray.join('');
  return decryptedText;
}

console.log(doubleLetterDecryption('doubled.txt'));
