/* eslint-disable no-undef */
'use strict';

const app = require('./app');

describe('Multiply without *', () => {
  test('It should multiply two numbers', () => {
    const multiplier = 2;
    const multiplied = 4;
    const output = 8;
    expect(app(multiplier, multiplied)).toEqual(output);
  });
});
