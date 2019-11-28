/* eslint-disable no-undef */
'use strict';
const app = require('./app');

describe('Hash map unique', () => {
  test('should return only unique characters', () => {
    const array = [1,2,3,4,4];
    const int = 8;
    const output = true;
    expect(app(array, int)).toEqual(output);
  });
  test('should return only unique characters', () => {
    const array = [1,2,3,4,4];
    const int = 17;
    const output = false;
    expect(app(array, int)).toEqual(output);
  });
});