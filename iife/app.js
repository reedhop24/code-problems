'use-strict'
// Simple iife 

var arr1 = (function() {
    let arr = ['I', 'have'];
    return arr.join(' ');
}());

var arr2 = (function() {
    let arr = ['created', 'an', 'iife'];
    return arr.join(' ');
}());

console.log(arr1 + arr2);

