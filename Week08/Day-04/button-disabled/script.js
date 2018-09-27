'use strict';

const petButtons = document.querySelector('.petButtons');
const signupButton  = document.querySelector('.signupButton');

console.log(petButtons);


petButtons.addEventListener('change', () => {
  signupButton.disabled = false;
});
