'use strict';

var duplicate = arr => {
  return arr.join('').repeat(2).split('').map((x) => {return parseInt(x);});
};

console.log(duplicate([1,2,3,4,5]));

module.exports = duplicate;