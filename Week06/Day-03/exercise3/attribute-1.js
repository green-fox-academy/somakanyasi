'use strict';

// Write the image's url to the console.

let myImage = document.getElementsByTagName('img');
console.log('link of the image:' + myImage[0].getAttribute('src'));

// Replace the image with a picture of your favorite animal.

myImage[0].setAttribute('src', 'https://i.ytimg.com/vi/kRwhh0tp4P8/maxresdefault.jpg');
myImage[0].setAttribute('style', `width:250px; height:200px`);

// Make the link point to the Green Fox Academy website.

let newLink = document.getElementsByTagName('a');
newLink[0].setAttribute('href', 'https://www.greenfoxacademy.com/');

// Disable the second button.

let myButton = document.getElementsByClassName('this-one');
myButton[0].disabled = true;

// Replace its text with 'Don't click me!'.
myButton[0].innerText = "Don't click me!";