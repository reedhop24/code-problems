/* eslint-disable no-undef */
'use strict';

const app = require('./app');

describe('Bubble Sort', () => {
  test('It should sort the array', () => {
    const input = [5,3,4,1,6];
    const output = [1,3,4,5,6];
    expect(app(input)).toEqual(output);
  });
});



