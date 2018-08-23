'use strict';

export function findAnagrams (inputString1: string, inputString2: string): boolean {
  return inputString1.split('').sort().join('') === inputString2.split('').sort().join('');
}