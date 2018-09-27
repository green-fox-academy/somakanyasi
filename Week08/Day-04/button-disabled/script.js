'use strict';

const petButtons = document.querySelector('.petButtons');
const signupButton  = document.querySelector('.signupButton');
const catFactButtons = document.querySelector('.catFactButtons');
const loveCatsButton = document.querySelector('.loveCatsButton');

console.log(petButtons);


petButtons.addEventListener('change', () => {
  signupButton.disabled = false;
});

catFactButtons.addEventListener('change', () => {
  loveCatsButton.disabled = false;
});
