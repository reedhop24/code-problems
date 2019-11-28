'use strict';

function isSum(arr, int){
  var map = new Map([
  ]);

  for(var i = 0; i < arr.length; i++){
    let diff = int - arr[i];
    if(map.has(diff)){
        return true;
    }
    map.set(arr[i]);
  }
  return false;
}

module.exports = isSum;


