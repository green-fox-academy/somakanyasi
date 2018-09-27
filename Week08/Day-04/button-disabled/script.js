'use strict';

const petButtons = document.querySelector('.petButtons');
const signupButton  = document.querySelector('.signupButton');
const catFactButtons = document.querySelector('.catFactButtons');
const yesButton = document.querySelector('#yes');
const noButton = document.querySelector('#no');
const loveCatsButton = document.querySelector('.loveCatsButton');
const viktorButton = document.querySelector('#viktor');


petButtons.addEventListener('change', () => {
  signupButton.disabled = false;
});

yesButton.addEventListener('change', () => {
  loveCatsButton.disabled = false;
});

noButton.addEventListener('change', () => {
  loveCatsButton.disabled = true;
});

loveCatsButton.addEventListener('click', () => {
  alert `Thank you, you've successfully signed up for cat facts.`
});