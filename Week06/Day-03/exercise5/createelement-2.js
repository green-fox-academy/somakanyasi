'use strict';

// Remove the king from the list.

let asteroidList = document.querySelector('.asteroids');
let kingElement = document.querySelector('li');
asteroidList.removeChild(kingElement);

// Fill the list based on the following list of objects.

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i]['asteroid'] === true) {
    let newPlanet = document.createElement('li');
    newPlanet.textContent = planetData[i]['content'];
    newPlanet.classList.add(planetData[i]['category'])
    asteroidList.appendChild(newPlanet);
  }
}

console.log(asteroidList);


