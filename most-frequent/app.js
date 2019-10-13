'use strict';
    function mostFrequent(arr){
       var currentItem;
       //set a variable to one 
       var compare = 1;
       //set a variable to count iterations
       var count = 0;
        for(var i = 0; i < arr.length; i++){
            for(var j = i; j < arr.length; j++){
                //if an instance of the current element arr[i] occurs count + 1
                if(arr[i] == arr[j]){
                    count++;
                }
                //if count of current element is greater than one
                if(count > compare){
                    //set one to count, to make compare the largest instance of arr[i]  
                    compare = count;
                    //set variable currentItem to arr[i] to store the object with the largest instance
                    currentItem = arr[i];
                    }
                }
                var count = 0;
            }
            //return object with the largest instance
            return currentItem;
        }
    

console.log(mostFrequent([2,2,34,2,2,1]));