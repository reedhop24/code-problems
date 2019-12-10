/* eslint-disable indent */
'use strict';
var singleNumber = function(nums) {
    let map = new Map();
    for(let i = 0, l = nums.length; i < l; i++){
        if(map.has(nums[i])){
            map.delete(nums[i]);
        } else {
            map.set(nums[i]);
        }
    }
    return map.entries().next().value[0];
};

console.log(singleNumber([4,1,2,1,2]));

