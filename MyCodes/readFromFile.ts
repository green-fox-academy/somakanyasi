'use strict'


//read from file with 'fs'
declare function require(path: string): any;
export{}

const fs = require('fs');
const charEncoding = 'utf-8';


function readFromFile (inputFileName: string): string{
  return fs.readFileSync(inputFileName, charEncoding);
}


function writeToAFile(fileName: string, data: any): void {
  fs.writeFileSync(fileName, data);
}