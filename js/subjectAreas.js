// When document is ready function
$(function () {


});

function getSelectedValue() {
  var selectedValue = document.getElementById("subjectdropdown").value;
  perfomSubjectSearch(selectedValue);

}

function perfomSubjectSearch(selectedValue) {
  // Switch statement to change flow of control over to ajax method based on user interaction // 
  switch (selectedValue) {

    case 'infoTech':
      performInfoTechSearch();
      break;

    case 'education':
      performEducationSearch();
      break;

    case 'engmancon':
      performEngManConSearch();
      break;

    case 'humanitiesArts':
      performHumanitiesArtsSearch();
      break;

    case 'healthwelf':
      performHealthWelfSearch();
      break;

    case 'sciences':
      performSciencesSearch();
      break;

    case 'services':
      performServicesSearch();
      break;

    case 'socialbusinesslaw':
      performSocialBusinessLawSearch();

      break;
  }
}

function renewCanvas() {

  // Empty subjectChartContainer
  $("#subjectChartContainer").empty();
  // Add new Canvas //
  $("#subjectChartContainer").append($("<canvas id=\"subjectChart\"></canvas>"));

}

function addChartElement() {
  //Add chart elements dynamically// 
  $("");
}

// Perform Agriculture Search
function performInfoTechSearch() {
  // Search URL
  var infoTechSearchURL = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F600?date=2009:2015';

  $.ajax({
    type: 'GET',
    url: infoTechSearchURL,
    dataType: "xml",
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

      });

      newSubjectChart(dataArray);
    }
  });
}


// Perform Education Search
function performEducationSearch() {
  // Search URL
  var educationSearchURl = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F140?date=2009:2015';

  $.ajax({
    type: 'GET',
    url: educationSearchURl,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

        newSubjectChart(dataArray);
      });
    }
  });
}


// Performs search for Engineering, Construction and Manufacturing
function performEngManConSearch() {
  // Search URL
  var engManConURl = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F700?date=2009:2015';
  $.ajax({
    type: 'GET',
    url: engManConURl,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

        newSubjectChart(dataArray);
      });
    }
  });
}


// Performs search for Humanities & Arts
function performHumanitiesArtsSearch() {
  // Search URL
  var humanitiesArtsSearchURl = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F200?date=2009:2015';
  $.ajax({
    type: 'GET',
    url: humanitiesArtsSearchURl,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

        newSubjectChart(dataArray);
      });
    }
  });
}



// Performs search for Health & Wealth
function performHealthWelfSearch() {
  // Search URL
  var healthWelfSearchURl = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F700?date=2009:2015';
  $.ajax({
    type: 'GET',
    url: healthWelfSearchURl,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

        newSubjectChart(dataArray);
      });
    }
  });
}



// Perform search for Sciences 
function performSciencesSearch() {
  // Search URL
  var sciencesSearchURL = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F400?date=2009:2015';
  $.ajax({
    type: 'GET',
    url: sciencesSearchURL,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

        newSubjectChart(dataArray);
      });
    }
  });
}



// Perform Services Search
function performServicesSearch() {
  // Search URL
  var servicesSearchURl = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F800?date=2009:2015';
  $.ajax({
    type: 'GET',
    url: servicesSearchURl,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;

        newSubjectChart(dataArray);
      });
    }
  });
}



// Perform Social Business Law Search
function performSocialBusinessLawSearch() {
  // Search URL
  var socialBusinessLawhURl = 'https://api.worldbank.org/v2/countries/GBR/indicators/UIS.FOSEP.56.F300?date=2009:2015';
  $.ajax({
    type: 'GET',
    url: socialBusinessLawhURl,
    dataType: 'xml',
    success: function (xmlresults) {
      renewCanvas();
      // Pull each result and stick it into chart
      // Data array and count to iterate through the xml tags 
      var dataArray = [];
      var count = 7;

      $(xmlresults).find('wb\\:data').each(function () {
        dataArray[count] = $(this).find('wb\\:value').text();
        count = count - 1;
        addVisibletoDropdown();
        newSubjectChart(dataArray);
      });
    }
  });
}



function newSubjectChart(dataArray){

  var subjectChart = document.getElementById('subjectChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';


  // Chart for % of students studying in subject area //

  var newSubjectChart = new Chart(subjectChart, {
    type: 'line', // Type could be bar, horizontal-bar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015'],
      datasets: [{
        label: 'Percentage Studying Subject Area',
          data: dataArray,

        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'

      }]
    },
    options: {
      title: {
        display: true,
        text: '% of Students Studying Subject Area (Both Sexes)',
        fontSize: 25
      },
      legend: {
        display: false,
        position: 'top',
        labels: {
          fontColor: '#000'
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }
      },
      tooltips: {
        enabled: true
      }
    }
  });

}

// function change() {
//   var newType = document.getElementById("chartTypedropdown").value;
//   var ctx = document.getElementById("subjectChart").getContext("2d");
//   if (subjectChart) {
//     subjectChart.destroy();
//   }
//   var temp = jQuery.extend(true, {}, config);
//   temp.type = newType;
//   myChart = new Chart(ctx, temp);
// };

