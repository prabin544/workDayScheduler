$(document).ready(function() {
    
    const now = moment();

    // Get current hour
    var currHour = now.format("hh A");
    
    //Get current Date 
    var currDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a").toString();

    var savedHour = $(".row")

    //Add current date and time in header
    $("#currentDay").append(currDate);

    //logic to change task block color
    var isFuture = false;

    $(".row").each(function(){
        var hour = ($(this).find(".hour").text());

        var task = ($(this).find(".col-8"));

        if (hour === currHour){
            task.addClass("present");
            isFuture = true;
        }else if (!isFuture){
            task.addClass("past");
        }else{
            task.addClass("future");
        }
    });

    //click event listner to retrieve hour, task and save in local storage.
    $(".saveBtn").on('click', function(){
        var saveBtn = $(this).attr("data-id");
        var clickedtime = ["09 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM","3 PM", "4 PM", "5 PM"];
        var savedTime = clickedtime[saveBtn];
        var task = $("#" + saveBtn).val();
        localStorage.setItem(savedTime,task);
        });
    
});




