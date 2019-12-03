/* eslint-disable no-undef */
'use strict';

const app = require('./memoization');
const fib = require('./fibonacci');

describe('Testing memoization', () => {
  test('It should calculate number of missions', () => {
    const input = 5;
    const output = 8;
    expect(app(input)).toEqual(output);
  });
});

describe('Testing memoization', () => {
  test('It should calculate number of missions', () => {
    const input = 5;
    const output = 8;
    expect(fib(input)).toEqual(output);
  });
});