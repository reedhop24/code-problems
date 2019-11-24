/* eslint-disable no-undef */
'use strict';

const iterative = require('./iterative');
const recursive = require('./recursive');

describe('Fib iterative & recursive', () => {
  test('Should return the fibonacci associated with the number passed in', () => {
    const input = 7;
    const output = 13;
    expect(iterative(input)).toEqual(output);
  });
  test('Should return the fibonacci associated with the number passed in', () => {
    const input = 13;
    const output = 233;
    expect(iterative(input)).toEqual(output);
  });
  test('Should return the fibonacci associated with the number passed in', () => {
    const input = 7;
    const output = 13;
    expect(recursive(input)).toEqual(output);
  });
  test('Should return the fibonacci associated with the number passed in', () => {
    const input = 13;
    const output = 233;
    expect(recursive(input)).toEqual(output);
  });
});