'use strict';

var duplicate = arr => {
  return arr.join('').repeat(2).split('');
};

console.log(duplicate([1,2,3,4,5]));