/* eslint-disable indent */
'use strict';
function add(arr, target){
    var map = new Map();
    for(var i = 0, l = arr.length; i < l; i++){
        if(map.has(target - arr[i])){
            var val1 = map.get(target - arr[i]);
            return [val1, i];
        }
        map.set(arr[i], i);
    }
}


