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
        var text = ($(this).find(".description").val());
        // localStorage.setItem("description", description) ;
        console.log(text);
        })
    });

    
    
});




