  
'use strict';

var ButtonStorage = document.getElementById('button');
ButtonStorage.addEventListener("click", function(event){
    var empty = [];
    var one = empty.push(document.getElementById("one").value);
    var two = empty.push(document.getElementById("two").value);
    var three = empty.push(document.getElementById("three").value);
    var four = empty.push(document.getElementById("four").value);
    var five = empty.push(document.getElementById("five").value);

    function equal10(arr){
 
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr.length; j++){
                if(i !== j){
                    var sum = parseFloat(arr[i]) + parseFloat(arr[j]);
                    if (sum == 10) {
                        var finalArr = [arr[i],arr[j]];
                        return finalArr;
                    }
                }
            }
        }
        return "No pairs = 10"
    }
    
    var output = (equal10(empty));
    var currentDiv = document.getElementById('main');
    var newDiv = document.createElement('tr');
    newDiv.id = 'newDiv';
    currentDiv.appendChild(newDiv);
    newDiv.textContent = output;
});