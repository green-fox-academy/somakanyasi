'use strict';

let string1 = 'barbanegra';


function countLetters (inputString: string) {
  let letters: any [] = [];
  let counter: any [] = [];
  let dictionary = {};
  let sortedString = inputString.split('').sort().join('');
  for(let i: number = 0; i < sortedString.length + 4; i++) {
    letters.push(sortedString.slice(0, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 ));
    counter.push(letters[i].length);
    sortedString = sortedString.substr(sortedString.lastIndexOf(sortedString.charAt(0)) + 1 );
  }

  letters.forEach((letters, i) => dictionary[letters] = counter[i]);

  console.log(counter);
  console.log(letters);
  
  return dictionary;
  
}

console.log(countLetters(string1));



let sortedString = string1.split('').sort().join('');


/*
console.log(string1.split('').sort().join(''));

console.log(sortedString.slice(0, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 ));

///////////////////------------------------------------------------------///////////////////////

 for(let i: number = 0; i < inputString.length; i++) {
    letters.push(sortedString.slice(0, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 ));
    sortedString = sortedString.slice(, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 );
  }
  return letters;

///////////////////------------------------------------------------------///////////////////////

  if (sortedString.length > 0) {
    return sortedString.slice(0, sortedString.lastIndexOf(sortedString.charAt(0)) + 1 )
    + countLetters(inputString.slice(1, sortedString.lastIndexOf(sortedString.charAt(0)) + 1))
  } else {
    return null;
*/

