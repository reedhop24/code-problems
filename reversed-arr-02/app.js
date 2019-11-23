'use strict';

var reversed = (arr) => {
    let j = arr.length - 1;
    for(let i = 0, l = Math.ceil(arr.length/2); i < l; i++){
        let stored = arr[i];
        arr[i] = arr[j];
        arr[j] = stored;
        j--;
    }
    return arr;
}

console.log(reversed([1,2,3,4,5]));
console.log(reversed([2,4,6,8,10,12]))

