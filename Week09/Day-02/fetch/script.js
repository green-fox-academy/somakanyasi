'use strict';

window.onload = () => {
  const URL = 'http://api.icndb.com/jokes/random';
  const button = document.querySelector('button');
  const div = document.querySelector('div');

  button.addEventListener('click', () => {
    fetch(URL) 
    .then(response => response.json())
    .then((resolvedObj) => {div.textContent = resolvedObj.value.joke})
    .reject(new Error ('no jokes bro!'))
  });
}