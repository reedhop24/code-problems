/* eslint-disable no-undef */
'use strict';

const app = require('./app');

describe('Most frequent', () => {
  test('Should return most frequent int', () => {
    const input = [1,2,2,3,45,2,1];
    const output = 2;
    expect(app(input)).toEqual(output);
  });
});
