'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

let myPs = document.getElementsByTagName('p');
console.log(myPs[3]);
console.log(myPs[3].classList);


if (myPs[3].classList.contains('dolphin')) {
  myPs[0].innerText = 'pear';
};

// If the first p has an 'apple' class, replace cat's content with 'dog'

if(myPs[0].classList.contains('apple')) {
  myPs[2].innerText = 'dog';
}

// Make apple red by adding a .red class

myPs[0].classList.add('red');

// Make balloon less balloon-like (change its shape)

myPs[1].style.borderRadius = '1%';
