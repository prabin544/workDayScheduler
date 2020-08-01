var time = 
$(document).ready(function() {
    
    const now = moment();
    var currHour = now.format("hh A");
    
    var currDate = moment().toString();

    //Add current date and time in header
    $("#currentDay").append(currDate);

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

    $(".saveBtn").on('click', function(){
        var bt_id = $(this).attr("data-id");
        var task = $("#" + bt_id).val();
        console.log(task);

        // var text = $(this).find(".description").val();
        // console.log(text);
        // localStorage.setItem("description", description) ;
        // var time = $(".hour").text;
        // console.log(time)
        // localStorage.setItem(time, text);
        // console.log(text);
        })
    
});




