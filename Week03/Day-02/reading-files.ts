declare function require(path: string): any;
'use strict'
export { };


const fs = require('fs');
const charEncoding = 'utf-8';


function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, charEncoding);
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function writeToAFile(fileName: string, data: any): void {
    fs.writeFileSync(fileName, data);
}

console.log();


function countChar(char: string): number {
    let result: number = 0;
    const fileContent: string = readFromFile('hello.txt');
    if (fileContent !== null) {
        fileContent.split('\n').forEach(e => {
            e.split('').forEach(item => {
                if (item === char) {
                    result++;
                }
            });
        });
    }
    writeToAFile('result.txt', result)
    return result;
}

console.log(countChar('n'));



writeToAFile('hell.txt', 'hello coffee');
// console.log(readFromFile('hello.txt'));

/*
fs.readFile('hello.txt', charEncoding, function(err, data){
    console.log(data);
})

console.log('123');
*/

