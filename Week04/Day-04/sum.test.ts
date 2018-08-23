'use strict';

import { SumClass, inputNumbers , emptyList, listWithOneElement, nullElement, stringElement} from './sum';


const test = require('tape');

test('Test if the sum method works with a number array', (test) => {
  test.equal(inputNumbers.sum(), 30, 'Soma method is working like a mothafucka!');
  test.end();
});

test('Test if the sum method works with an empty list', (test) => {
  test.equal(emptyList.sum(), 0, 'Soma method is working like a mothafucka!');
  test.end();
});

test('Test if the sum method works with just one element', (test) => {
  test.equal(listWithOneElement.sum(), 5, 'Soma method is working like a mothafucka!');
  test.end();
});

test('Test if the sum method works with a null element list', (test) => {
  test.equal(nullElement.sum(), 0, 'Soma method is working like a mothafucka!');
  test.end();
});

test('Test if the sum method works with a string element', (test) => {
  test.equal(stringElement.sum(), '0haligali', 'Soma method is working like a mothafucka!');
  test.end();
});

