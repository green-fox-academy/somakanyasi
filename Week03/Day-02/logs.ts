declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP addresses.
// Write a function that returns the GET / POST request ratio.


//how to use the path of the file?
//path to the log.txt file: teaching-materials/workshop/file-manipulations/logs/log.txt

/*let pathToFile = ' ../teaching-materials/workshop/file-manipulations/logs/log.txt';

function readFromRemoteRepo(inputPath: string,): string {
    try {
        return fs.readFileSync(inputPath, charEncoding);
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

readFromRemoteRepo(pathToFile);
*/

function readFromFile (inputFileName: string): string{
    return fs.readFileSync('log.txt', charEncoding);
}

/*
function uniqueIPAddresses(inputList: string): any [] {
    let uniqueIPs: any [] = [];
    let arrayFromInput: any [] = readFromFile(inputList).split('\n');
    

    return ;
}
*/

function getPostRatioCounter (inputFile: string) {
    let ContentOfFile: string [] = readFromFile(inputFile).split('\n');
    let getCount: number = 0;
    let postCount: number = 0;
    ContentOfFile.forEach(element => {
        if (element.toString().match(/GET/) === null) {
            postCount ++;
        } else {
            getCount ++;
        }
    });
    console.log(getCount);
    console.log(postCount);
    return getCount / postCount;
}

console.log(getPostRatioCounter('log.txt'));
