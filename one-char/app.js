var A = ['a','a','a','b','c','c','c','a'];

var B = ['!', 3, 3, 4, 5, 4, 5];

var C = ['x', 'x', 'x', 'x', 'x', 'X', 'x', 'x', 'x'];

function onlyOnce(arr){
    var results = [];
    for(var i = 0, len = arr.length; i < len; i++){
        var count = 0;
        for(var j = 0; j < len; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count == 1){
            results.push(arr[i]);
        }                                                   
    }
    return results;
}

//should return 'b'
console.log(onlyOnce(A));

//should return '!'
console.log(onlyOnce(B));

//should return 'X'
console.log(onlyOnce(C));