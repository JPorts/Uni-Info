

function performJobSearch(){

    $("#jobstable").find("tr:gt(0)").remove();
    var jobSearhURL = 'http://api.lmiforall.org.uk/api/v1/soc/search?q=';
    var searchTerms = $('#job-search-term').val();
    $.getJSON(jobSearhURL + searchTerms, function(result){
        //console.log(result);
        result.forEach(results => {
            var row = $("<tr></tr>");
            var jobTitleCell = $("<td></td>")
            var socCodeCell = $("<td></td>")
            jobTitleCell.html(results.title);
            socCodeCell.html(results.soc);

            row.append(jobTitleCell);
            row.append(socCodeCell);
            $('#jobstable tbody').append(row);

        });
    });
}

$(function removeTableRows()
  {
  $('table tr').not(':nth-child(1)').remove()
});


function performApprenticeSearch(){
    var apprenticeSearhURL = '';
}

$(function(){
    $('#jobSearch').on('click', performJobSearch);
    $('#apprenticeSearch').on('click', performApprenticeSearch);
});
