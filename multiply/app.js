'use strict';

function multiply(multiplier, multiply){
  var increment = 0;
  var count = 0;
  while(count < multiply){
    count++;
    increment += multiplier;
  }
  return increment;
}

module.exports = multiply;
