'use strict';

const button = document.querySelector('button');

const timestampDisplayer = (event) => {
  console.log(new Date());
  console.log(event.timeStamp);
  button.removeEventListener('click', timestampDisplayer)
}

const anotherTimeDisplayer = (event) => {
  console.log(new Date());
  console.log(event.timeStamp);
  button.disabled = true;
}

button.addEventListener('click', timestampDisplayer);
