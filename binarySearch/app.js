'use strict';

var binarySearch = (arr, target) => {
   arr = arr.sort();
   let left = 0;
   let right = arr.length - 1;
   while(left <= right){
       const mid = left + Math.floor((right - left)/2);
       if(arr[mid] === target){
           return mid;
       }
       if(arr[mid] < target){
           left = mid + 1;
       } else {
           right = mid - 1;
       }
   }
   return -1;
}

module.exports = binarySearch;

