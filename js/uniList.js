$(document).ready(function(){
    // Add CSS class visible, remove class hidden 
    $('#universityTable').addClass('setVisible');
    $('#universityTable').removeClass('setHidden');
    performUniListSearch();
});

function performUniListSearch() {
    var uniListURL = '../JSON/uniList.json';
    // Get result and append to table
    $.getJSON(uniListURL, function (result) {
        console.log(result);
        result.forEach(results => {
            var row = $("<tr></tr>");
            var universityTitleCell = $("<td></td>")
            var universityLinkCell = $("<td></td>")
            universityTitleCell.html(results.name);
            universityLinkCell.html(results.web_pages);

            row.append(universityTitleCell);
            row.append(universityLinkCell);
            $('#universityTable tbody').append(row);

        });
  });
}
