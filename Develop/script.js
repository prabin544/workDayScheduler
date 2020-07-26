$(document).ready(function() {
    // This line appends current date in #currentDay tag
    const now = moment();
    var currDate = moment().toString();
    $("#currentDay").append(currDate);

    $(".col-3").append(now.format("hh:mm:ss A"));
    console.log(now.format("hh:mm:ss A"));

});




