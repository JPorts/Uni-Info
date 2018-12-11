function performJobSearch() {
    //Add CSS class visible, Remove hidden class
    $("table:first").addClass("setVisible");
    $("table:first").removeClass("setHidden");
    //Remove Rows from any previous search
    $("#jobstable").find("tr:gt(0)").remove();
    // Search URL
    var jobSearchURL = 'http://api.lmiforall.org.uk/api/v1/soc/search?q=';
    // Pull Search Terms 
    var searchTerms = $('#job-search-term').val();
    // Get result and append to table
    $.getJSON(jobSearchURL + searchTerms, function (result) {
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
    removeExtraRows();
}

function performSOCSearch() {
    //Add CSS class visible, Remove hidden class
     $('#socCodeTable').addClass("setVisible");
     $('#socCodeTable').removeClass("setHidden");
    //Remove Rows from any previous search
    $("#socCodeTable").find("tr:gt(0)").remove();
    var socSearchURL = 'http://api.lmiforall.org.uk/api/v1/soc/code/';
    //Pull Search Terms
    var searchTerms = $("#soc-search-term").val();
    //Get result and append to table
    $.getJSON(socSearchURL + searchTerms, function (result) {


        Object.keys(result).forEach(function (key){
            console.log(Object.values(result));

            var row = $("<tr></tr>");
            var SOCTitleCell = $("<td></td>")
            var descriptionCell = $("<td></td>")
            var qualificationsCell = $("<td></td>")
            var tasksCell = $("<td></td>")

            SOCTitleCell.html(result.title);
            descriptionCell.html(result.description);
            qualificationsCell.html(result.qualifications);
            tasksCell.html(result.tasks);
            //Append to row
            row.append(SOCTitleCell);
            row.append(descriptionCell);
            row.append(qualificationsCell);
            row.append(tasksCell);
            
            $('#socCodeTable tbody').append(row);
        });

    });
    removeExtraRows();

}

$(function () {
    $('#jobSearch').on('click', performJobSearch);
    $('#socSearch').on('click', performSOCSearch);
});

function removeExtraRows(){
    $("#socCodeTable").find("tr:gt(1)").remove();

}