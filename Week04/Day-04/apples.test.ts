'use strict';

import { fruitBasket } from './apples';
const test = require('tape');

test('One should match with the other', (test) => {
  test.equal(fruitBasket.getApple(), 'apple', 'should be the same');
  test.end();
});
