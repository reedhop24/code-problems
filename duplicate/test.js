/* eslint-disable no-undef */
'use strict';

const app = require('./app');

describe('Duplicate Array', () => {
  test('Should return an array of duplicated elements', () => {
    const input = [1,2,3,4,5];
    const output = [1,2,3,4,5,1,2,3,4,5];
    expect(app(input)).toEqual(output);
  });
});

