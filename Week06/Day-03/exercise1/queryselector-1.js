'use strict';

let king = document.getElementById('b325');
console.log(king);

let businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0], businessLamp[1]);

let conceitedKing = document.querySelectorAll('.container .asteroid');
for (var i = 0; i < conceitedKing.length; i++){
  alert('Alert bitches!!' + conceitedKing[i].innerText);
};

let noBusiness = document.getElementsByTagName('div');
console.log(noBusiness[0], noBusiness[1], noBusiness[2]);
