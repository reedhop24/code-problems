'use-strict';

var selection = arr => {
    let len = arr.length;
    for(var i = 0; i < len; i++){
        let min = i;
        for(var j = i+1; j < len; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(min !== i){
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log(selection([2,8,4,3,6,1,5]));