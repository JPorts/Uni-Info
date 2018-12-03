$(document).ready(function(){
    
    
    $(function() {
        $.ajax({
        url: "http://universities.hipolabs.com/search?country=United%20Kingdom",
        type: "get",
        crossDomain: true,
        dataType: "json",
        success: function(data) {
            console.log(data[0].name);
            
            outputString= data[0].name+' '+data[0].web_pages+' ';
               var paragraph = $("<p />", {
                   text: outputString
               });
        $("#universities").append(paragraph);
        }
        });
       });
});