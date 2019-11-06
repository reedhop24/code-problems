'use-strict';

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

// Should return 1
console.log(binarySearch([1,2,3,4,5,6], 2));

// Unsorted should return 6
console.log(binarySearch([3,5,8,1,2,4,6], 8));


