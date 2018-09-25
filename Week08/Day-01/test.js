'use strict';

const source = require('./poker-checker');
const tape = require('tape');

//in javascript you have to put the tape in fron of test, just because..

tape.test('Is it a card?', t => {
  const testCard = '5X';
  t.notOk(source.cardChecker(testCard), 'This is not a card!');
  t.end();
});

tape.test('Is it a card?', t => {
  const testCard = 'QS';
  t.ok(source.cardChecker(testCard), 'This is a card!');
  t.end();
});

tape.test('Is this a valid hand?', t => {
  const testHand = '2H 2H KC AS QD';
  t.notOk(source.duplicateChecker(testHand), 'There is a duplication!');
  t.end();
});

tape.test('Is this a valid hand?', t => {
  const testHand = '2H TC KC 6H 7D';
  t.ok(source.duplicateChecker(testHand), 'This is a valid hand!');
  t.end();
});

tape.test('Is this a valid hand?', t => {
  const testHand = '2H TC KC 6H';
  t.notOk(source.handChecker(testHand), 'Not enough cards!');
  t.end();
});

tape.test('Is this a valid hand?', t => {
  const testHand = '2H 3S AH 2X 4S';
  t.notOk(source.handChecker(testHand), 'Invalid card in the hand!');
  t.end();
});

tape.test('Is this a valid hand?', t => {
  const testHand = '2H TC KC 6H AD';
  t.ok(source.handChecker(testHand), 'This is a valid hand!');
  t.end();
});
