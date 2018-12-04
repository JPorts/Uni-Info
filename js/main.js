$(document).ready(function(){
    
    
    $(function() {
        $.ajax({
        url: "http://universities.hipolabs.com/search?country=United%20Kingdom",
        type: "get",
        crossDomain: true,
        dataType: "json",
        success: function(data) {
          //  log in console 
                console.log(data);

                 var $unilinks=$('#uni-lookup');
               // If data is populated 
                // if (data.results && data.results.length > 0) {

                  //  Build html & display university institutions
                    var universities = '<p>Here are your UK institutions:</p>';
                    
                    $.each(data.results, function(uni, i) {
                        console.log(uni);
                            universities += '<p>';
                            universities += '<a href="' + uni.web_pages + '" target="_blank">';
                            universities += uni.name;
                            universities += '</a>';
                            universities += '</p>';
                        
                    });
                

                    $unilinks.html(universities);

                // } else {
                //     $unilinks.html('<p>No Universities found for UK. Please try again.</p>');
                // }
        }
        });
       });
  


       // Drop down stuff for subject areas
       $('.dropdown-content').find('a').on('click', function(e){
           e.preventDefault();

        });


            // Create var for uni-lookup html
            // var $unilinks=$('#uni-lookup');
            // var requestURL = 'http://universities.hipolabs.com/search?country=United%20Kingdom';
            // $unilinks.html("UK University institutions")
            // $.getJSON(requestURL, function(data){
            //     log in console 
            //     console.log(data);

            //     If data is populated 
            //     if (data.results && data.results.length > 0) {

            //         Build html & display university institutions
            //         var universities = '<p>Here are your UK institutions:</p>';
                
            //         $.each(data.results, function(i, uni) {
            //             if ('gb' === uni.alpha_two_code.toLowerCase()) {
            //                 universities += '<p>';
            //                 universities += '<a href="' + uni.web_pages + '" target="_blank">';
            //                 universities += uni.name;
            //                 universities += '</a>';
            //                 universities += '</p>';
            //             }
            //         });
                

                
            //         $unilinks.html(universities);
            //     } else {
            //         $unilinks.html('<p>No Universities found for UK. Please try again.</p>');
            //     }
            // });


         //  switch($(this).attr('href')){
        //       case 'agriculture.html' 

        //   }

        // GET % of STUDENTS in TERTIARTY SUBJECT AREAS


});

