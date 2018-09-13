'use strict';

const test = require('tape');

import { numberToString } from './number-converter';


test((test) => {
  let myNumber: number = 7;
  
  test.equal(numberToString(myNumber), 'seven');
  test.end();
});

test((test) => {
  let myNumber: number = 13;
  
  test.equal(numberToString(myNumber), 'thirteen');
  test.end();
});

test((test) => {
  let myNumber: number = 17;
  
  test.equal(numberToString(myNumber), 'seventeen');
  test.end();
});

test((test) => {
  let myNumber: number = 55;
  
  test.equal(numberToString(myNumber), 'fifty five');
  test.end();
});

test((test) => {
  let myNumber: number = 666;
  
  test.equal(numberToString(myNumber), 'six hundred and sixty six');
  test.end();
});

test((test) => {
  let myNumber: number = 3986;
  
  test.equal(numberToString(myNumber), 'three thousand nine hundred and eighty six');
  test.end();
});

test((test) => {
  let myString: string = 'seven';
  
  test.equal(numberToString(myString), 7);
  test.end();
});