// When document is ready function
$(function () {


});

      function getSelectedValue(){
        var selectedValue = document.getElementById("subjectdropdown").value;
        perfomSubjectSearch(selectedValue);

      }

      function perfomSubjectSearch(selectedValue){
        console.log('PerformSearchValue: ' + selectedValue);
        // Switch statement to change flow of control over to ajax method based on user interaction // 
        switch(selectedValue){
      
          case 'infoTech':
          performInfoTechSearch();
          break;
      
          case 'education':
          performEducationSearch();
          break;
      
          case 'engmancon':
          performInfoTechSearch();
          break;
      
          case 'humanitiesArts':
          performInfoTechSearch();
          break;
      
          case 'healthwelf':
          performInfoTechSearch(); 
          break;
      
          case 'sciences':
          performInfoTechSearch();
          break;
      
          case 'services':
          performInfoTechSearch(); 
          break;
      
          case 'socialbusinesslaw':
          performInfoTechSearch();
          
          break;
        }
      }

      function addChartElement(){
        //Add chart elements dynamically// 

      }

     // Perform Tertiary Enrolment Search 
     function performTertiaryEnrolmentSearch(){
         // Search URL
         var tertieryEnrolmentURl ='http://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2009:2015';
         $.ajax({
           type:'GET',
           url: tertieryEnrolmentURl,
           dataType: 'json',
           success: function (results){
             $.each(results, function(i, result){
                       // Pull each result and stick it into chart
                    
             });
           }
         });
     }

     // Perform Agriculture Search
     function performInfoTechSearch() {
         // Search URL
         var infoTechSearchURL = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F600?date=2009:2015';

         $.ajax({
             type:'GET',
             url: infoTechSearchURL,
             dataType: "json",
             success: function(results){
                 $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                     console.log(result);
                 });
             }
         });
     }


     // Perform Education Search
     function performEducationSearch(){
       // Search URL
       var educationSearchURl ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F140?date=2009:2015';
       $.ajax({
         type:'GET',
         url: educationSearchURl,
         dataType: 'json',
         success: function (results){
           $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                     console.log(result);
           });
         }
       });
     }
     

     // Performs search for Engineering, Construction and Manufacturing
     function performEngManConSearch(){
      // Search URL
      var engManConURl ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F500?date=2009:2015';
      $.ajax({
        type:'GET',
        url: engManConURl,
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                     console.log(result);
          });
        }
      });
    }


     // Performs search for Humanities & Arts
    function performHumanitiesArtsSearch(){
      // Search URL
      var humanitiesArtsSearchURl ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F200?date=2009:2015';
      $.ajax({
        type:'GET',
        url: humanitiesArtsSearchURl,
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                     console.log(result);
          });
        }
      });
    }



    // Performs search for Health & Wealth
    function performHealthWelfSearch(){
      // Search URL
      var healthWelfSearchURl ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F700?date=2009:2015';
      $.ajax({
        type:'GET',
        url: healthWelfSearchURl,
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                     console.log(result);
          });
        }
      });
    }



    // Perform search for Sciences 
    function performSciencesSearch(){
      // Search URL
      console.log('booya');
      var sciencesSearchURL ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F400?date=2009:2015';
      $.ajax({
        type:'GET',
        url: sciencesSearchURL,
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                     console.log(result);
          });
        }
      });
    }



    // Perform Services Search
    function performServicesSearch(){
      // Search URL
      var servicesSearchURl ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F800?date=2009:2015';
      $.ajax({
        type:'GET',
        url: servicesSearchURl,
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
            // Pull each result and stick it into chart
            console.log(result);
          });
        }
      });
    }
    


    // Perform Social Business Law Search
    function performSocialBusinessLawSearch(){
      // Search URL
      var socialBusinessLawhURl ='https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F300?date=2009:2015';
      $.ajax({
        type:'GET',
        url: socialBusinessLawhURl,
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
            // Pull each result and stick it into chart
            console.log(result);
          });
        }
      });
    }

