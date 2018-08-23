'use strict';

import { findAnagrams, string1, string2 } from './anagram';
import { stringElement } from './sum';
const test = require('tape');

test('If They are anagrams', (test) => {
  test.equal(findAnagrams(string1, string2), true, 'should be the same');
  test.end();
});