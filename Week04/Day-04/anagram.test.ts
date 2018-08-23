'use strict';

import { findAnagrams } from './anagram';
const test = require('tape');

test('If They are anagrams', (test) => {
  test.equal(findAnagrams('silent', 'listen'), true, 'should be the same');
  test.end();
});