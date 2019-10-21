// The following code takes a 2 integer arrays, determine of the 2nd array is a rotated version of the 1st array. 
//Ex. Original Array A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3}

var A = [1,2,3,4,5];
var B = [4,5,1,2,3];

var A1 = [56,67,89,92,34,89];
var A2 = [92,34,89,56,67,89];

var A3 = [103, 111, 135, 34, 55, 690, 8];
var A4 = [8, 34, 55, 103, 111, 135, 690];

var A5 = [1, 1, 1, 1, 1, 1, 1, 1];
var A6 = [1, 1, 1, 1, 2, 1, 1, 1];

function rotate(A,B){
    var empty = '';
    for(var i = 0; i < A.length; i++){
        A.unshift(A[A.length-1]);
        A.splice(A.length-1, 1);
        empty += A + " ";
    }
    var x = empty.split(" ");
    var y = B.join(",");
  
    for(var j = 0; j < x.length; j++){
        if(x[j] == y){
            return true;
        }
    }
    return false;
}

// should return true
console.log(rotate(A,B));
//should return true
console.log(rotate(A1, A2));

//should return false
console.log(rotate(A3, A4));

//should return false
console.log(rotate(A5, A6));