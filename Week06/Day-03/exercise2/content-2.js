'use strict';

let newContent = ['apple', 'banana', 'cat', 'dog'];
let listItems = document.getElementsByTagName('li');

for(let i = 0; i < listItems.length; i++) {
  listItems[i].innerText = newContent[i];
}

let myUL = document.getElementsByTagName('ul');
myUL[0].setAttribute('style', 'background-color: limegreen');