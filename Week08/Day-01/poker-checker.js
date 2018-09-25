'use strict';

const cards = [
  ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'],
  ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'],
  ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'],
  ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC'],
];

let myHand = '2H 3S AH JH 4S';

const cardChecker = (card) => {
  for (let rows = 0; rows < 4; rows++) {
    for (let cols = 0; cols < 13; cols++) {
      if (card === cards[rows][cols]) {
        return true;
      }
    }
  }
  return false;
}

console.log(cardChecker('5S'));

const duplicateChecker = (hand) => {
  let splittedHand = hand.split(' ');
  for (let i = 0; i < splittedHand.length; i++) {
    if (splittedHand.indexOf(splittedHand[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(duplicateChecker(myHand));

const handChecker = (hand) => {
  let splittedHand = hand.split(' ');
  if (splittedHand.length === 5 && splittedHand.every(e => cardChecker(e) === true) && duplicateChecker(hand) === true) {
    return true
  }
  return false;
}

console.log(handChecker(myHand));

module.exports = { cardChecker, duplicateChecker, handChecker };
