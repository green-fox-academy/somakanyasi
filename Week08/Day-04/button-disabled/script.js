'use strict';

const petButtons = document.querySelector('.petButtons');
const signupButton  = document.querySelector('.signupButton');
const catFactButtons = document.querySelector('.catFactButtons');
const loveCatsButton = document.querySelector('.loveCatsButton');


petButtons.addEventListener('change', () => {
  signupButton.disabled = false;
});

catFactButtons.addEventListener('change', () => {
  loveCatsButton.disabled = false;
});

loveCatsButton.addEventListener('click', () => {
  alert `Thank you, you've successfully signed up for cat facts.`
});