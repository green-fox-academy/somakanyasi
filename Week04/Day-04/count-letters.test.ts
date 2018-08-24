'use strict';

import { countLetters } from './count-letters';
import { myString } from './count-letters';
const test = require('tape');

test('It should count the letters in a given string', (test) => {
  test.equal(countLetters(myString), true, 'should be the same');
  test.end();
});