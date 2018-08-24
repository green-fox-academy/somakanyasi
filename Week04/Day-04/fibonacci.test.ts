'use strict';

import {fibonacciSequence, testNum, negativeTestNum, testNum2} from './fibonacci';

const test = require('tape');

test('Should test if it tells the number at that index', (test) => {
  test.equal(fibonacciSequence(testNum), 21, 'This method works like a mothafucka!');
  test.end();
});

test('Should test if it tells the number at that index', (test) => {
  test.equal(fibonacciSequence(negativeTestNum), 1, 'This method works like a mothafucka!');
  test.end();
});

test('Should test if it tells the number at that index', (test) => {
  test.equal(fibonacciSequence(testNum2), 1, 'This method works like a mothafucka!');
  test.end();
});