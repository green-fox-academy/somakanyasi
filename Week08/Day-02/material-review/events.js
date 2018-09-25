'use strict';

const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const leave = document.querySelector('.leave');
const key = document.querySelector('.key');
const bubbling = document.querySelector('.bubbling');
const form = document.querySelector('.form');

const blur = document.querySelector('.blur');
const change = document.querySelector('.change');
const focus = document.querySelector('.focus');
const select = document.querySelector('.select');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const callback = (event) => {
  event.target.style.backgroundColor = getRandomColor();
};

click.addEventListener('click', callback);         // ez ugyanaz mint ez: click.onclick = callback;
hover.addEventListener('mouseenter', callback);    // ez ugyanaz mint ez: hover.mouseenter = callback;
leave.addEventListener('mouseleave', callback);    // ez ugyanaz mint ez: leave.mouseleave = callback;

blur.addEventListener('blur', callback);       // bele kattintok majd kikattintok és akkor történik meg az event
change.addEventListener('change', callback);   // ha beleírunk az elementbe
focus.addEventListener('focus', callback);     // akkor változik ha belekattintunk a formba
select.addEventListener('select', callback);   // ha kijelöljük a formban lévő szöveget

document.addEventListener('keypress', (e) => {
  key.innerHTML = e.keyCode;
});

bubbling.addEventListener('click', (e) => {
  if (e.target.dataset.cica === 'one') {
    console.log(e.target.innerHTML);
  } else if (e.target.dataset.cica === 'two') {
    console.log(e.target.innerHTML);
  }
});

let obj ={};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { blur, change, focus, select } = event.target.elements;  // az egyenlőségjel utáni rész az előtagja az object elemeinek
  obj = {
    blur: blur.value,
    change: change.value,
    focus: focus.value,
    select: select.value,
  }
  console.log(obj);
});
