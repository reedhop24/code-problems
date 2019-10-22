'use strict';

$(document).ready(function(){
    $('#main').hide();
    $("button").click(function(){
        var michael = $("#Michael").val();
        var kevin = $("#Kevin").val();
        var michaelArr = michael.split(" ");
        var kevinArr = kevin.split(" ");

        function compare(arr, arr2){
            var copies = [];
            var wordcount = 0;
            
            if(arr == ''&& arr2 == ''){
                return 'Silence...';
            }

            for(var i = 0, len = arr2.length; i < len; i++){
                for(var j = 0; j < len; j++){
                    if(arr[i] == arr2[j]){
                        wordcount++;
                        copies.push(arr[i]);
                        break;
                    }
                }
            }
            
            if(wordcount >= 1){
                return "Michael copied Kevin " + wordcount + " times, the words are: " +  copies.join(" "); 
            }
            else{
                return "Michael did not copy Kevin."
            }
        }
        console.log(compare(michaelArr, kevinArr));
      
        $('#new-row').remove();
        $("#row").clone().insertAfter('#row').attr('id','new-row');
        $('#new-row').append(compare(michaelArr, kevinArr));
        $('#main').show();
    });
});
