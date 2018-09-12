'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.

let asteroidList = document.querySelector('.asteroids');
let newElement = document.createElement('li');
newElement.textContent = 'The Green Fox';
asteroidList.appendChild(newElement);

// Add an item that says 'The Lamplighter' to the asteroid list.

let secondNewElem = document.createElement('li');
secondNewElem.textContent = 'The Lamplighter';
asteroidList.appendChild(secondNewElem);

// Add a heading saying 'I can add elements to the DOM!' to the .container.

let myContainer = document.querySelector('.container');
let newHeading = document.createElement('h1');
newHeading.textContent = 'I can add elements to the DOM!';
myContainer.appendChild(newHeading);

// Add an image, any image, to the container.

let newPicture = document.createElement('img');
newPicture.src = 'https://vignette.wikia.nocookie.net/creation/images/d/db/Ohyeah.jpg/revision/latest?cb=20161109111933';
myContainer.appendChild(newPicture);
