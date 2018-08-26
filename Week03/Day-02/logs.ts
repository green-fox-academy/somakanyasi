declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP addresses.
// Write a function that returns the GET / POST request ratio.


function readFromFile(inputFileName: string): string {
    return fs.readFileSync('log.txt', charEncoding);
}


function uniqueIPAddresses(inputList: string): any[] {
    let ipArray: any[] = readFromFile(inputList).match(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/ig);     //match method returns with an array
    let uniqueIpArray: string[] = ipArray.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
    return uniqueIpArray;
}

console.log(uniqueIPAddresses('log.txt'));


function getPostRatioCounter(inputFile: string) {
    let ContentOfFile: string[] = readFromFile(inputFile).split('\n');
    let getCount: number = 0;
    let postCount: number = 0;
    ContentOfFile.forEach(element => {
        if (element.toString().match(/GET/) === null) {
            postCount++;
        } else {
            getCount++;
        }
    });
    console.log(getCount);
    console.log(postCount);
    return getCount / postCount;
}

console.log(getPostRatioCounter('log.txt'));
