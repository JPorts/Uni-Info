

var enrolmentChart = document.getElementById('enrolmentChart').getContext('2d');
console.log()
  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';


// Chart for % of students studying in tertiary subject area //

var tertiaryEnrolmentChart = new Chart(enrolmentChart, {
    type: bar, // Type could be bar, horizontal-bar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['2009','2010','2011','2012','2013','2014','2015'],
        datasets:[{
            label:'Student Enrolment',
            datasets:[{
              label:'Student Enrolment',
              data:[
                2415222,
                2479197,
                2492284,
                2495779,
                2386199,
                2352932.78,
                2330334.48
              ]
             }],

          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'

        }]
    },
    options:{
        title:{
          display:true,
          text:'Student Enrolment over Time',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });


       // Drop down stuff for subject areas
       $('.dropdown-content').find('a').on('click', function(e){
        e.preventDefault();

     });

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
     function performAgricultureSearch() {
         // Search URL
         var agricultureSearchURL = 'http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F500?date=2009:2015';

         $.ajax({
             type:'GET',
             url: 'http://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F500?date=2009:2015',
             dataType: "json",
             success: function(results){
                 $.each(results, function(i, result){
                     // Pull each result and stick it into chart
                 });
             }
         });
     }

     // Perform Education Search
     function performEducationSearch(){
       // Search URL
       var educationSearchURl ='';
       $.ajax({
         type:'GET',
         url: '',
         dataType: 'json',
         success: function (results){
           $.each(results, function(i, result){
                     // Pull each result and stick it into chart
           });
         }
       });
     }
     // Performs search for Engineering, Construction and Manufacturing
     function performEngManConSearch(){
      // Search URL
      var engManConURl ='';
      $.ajax({
        type:'GET',
        url: '',
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
          });
        }
      });
    }
     // Performs search for Humanities & Arts
    function performHumanitiesArtsSearch(){
      // Search URL
      var humanitiesArtsSearchURl ='';
      $.ajax({
        type:'GET',
        url: '',
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
          });
        }
      });
    }

    // Performs search for Health & Wealth
    function performHealthWelfSearch(){
      // Search URL
      var healthWelfSearchURl ='';
      $.ajax({
        type:'GET',
        url: '',
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
          });
        }
      });
    }

    // Perform search for Sciences 
    function performSciencesSearch(){
      // Search URL
      var sciencesSearchURL ='';
      $.ajax({
        type:'GET',
        url: '',
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
          });
        }
      });
    }

    // Perform Services Search
    function performServicesSearch(){
      // Search URL
      var servicesSearchURl ='';
      $.ajax({
        type:'GET',
        url: '',
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
          });
        }
      });
    }
    
    // Perform Social Business Law Search
    function performSocialBusinessLawSearch(){
      // Search URL
      var socialBusinessLawhURl ='';
      $.ajax({
        type:'GET',
        url: '',
        dataType: 'json',
        success: function (results){
          $.each(results, function(i, result){
                     // Pull each result and stick it into chart
          });
        }
      });
    }




$(function () {
  // Perform search based on dropdown click
  $('#agriculture').on('click', performAgricultureSearch);
  $('#education').on('click', performEducationSearch);
  $('#engmancon').on('click', performEngManConSearch);
  $('#humanitiesArts').on('click', performHumanitiesArtsSearch);
  $('#healthwelf').on('click', performHealthWelfSearch);
  $('#sciences').on('click', performSciencesSearch);
  $('#services').on('click', performServicesSearch);
  $('#socialBusinessLaw').on('click', performSocialBusinessLawSearch);
});

