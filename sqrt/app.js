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
        
        var x = empty.map(Math.sqrt);
        return x;
    }
    
    function nuke(){
        var x = document.getElementById('newDiv');
        if (x) {
          x.remove();
        }
      }

    nuke();
    var output = (equal10(empty));
    var currentDiv = document.getElementById('main');
    var newDiv = document.createElement('tr');
    newDiv.id = 'newDiv';
    currentDiv.appendChild(newDiv);
    newDiv.textContent = output;
});