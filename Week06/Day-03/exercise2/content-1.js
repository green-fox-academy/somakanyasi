'use strict';

var myParagraphs = document.getElementsByTagName('p');
var lastContent = document.getElementsByClassName('animals');

//change the content of all to the last one's content
for(var i = 0; i < myParagraphs.length; i++) {
  myParagraphs[i].innerHTML = lastContent[0].innerText;
}
//change the content of all to the last one's content keeping the cat <strong>
for (let j = 0; j < myParagraphs.length; j++) {
  myParagraphs[j].innerHTML = lastContent[0].innerHTML;
}
