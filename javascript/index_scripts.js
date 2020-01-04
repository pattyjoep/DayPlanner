var TimeWorkDay = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
var Table = $("#TimeTable")

$(document).ready(function() {

    var DateDisplay = document.querySelector("#currentDate")
    var currentDate = moment().format('LL');

    DateDisplay.textContent = currentDate


    var Time = moment().format('LTS');
    var TimeDisplay = document.querySelector("#currentTime")

    TimeDisplay.textContent = Time

    var newSaveAllBtn = $("<button>")
    var newCompleteAllBtn = $("<button>")

    newSaveAllBtn.text("Save All")
    newSaveAllBtn.attr({
        id: "SaveAllBtn",
        class: "SaveAllBtn btn btn-primary"
    })

    newCompleteAllBtn.text("Complete All")
    newCompleteAllBtn.attr({
        id: "CompleteAllBtn",
        class: "CompleteAllBtn btn btn-success"
    })

    $("#headerBtn").append(newSaveAllBtn, newCompleteAllBtn)


    $("#txt9AM").text(localStorage.getItem("ToDo9AM"))
    $("#txt10AM").text(localStorage.getItem("ToDo10AM"))
    $("#txt11AM").text(localStorage.getItem("ToDo11AM"))
    $("#txt12PM").text(localStorage.getItem("ToDo12PM"))
    $("#txt1PM").text(localStorage.getItem("ToDo1PM"))
    $("#txt2PM").text(localStorage.getItem("ToDo2PM"))
    $("#txt3PM").text(localStorage.getItem("ToDo3PM"))
    $("#txt4PM").text(localStorage.getItem("ToDo4PM"))
    $("#txt5PM").text(localStorage.getItem("ToDo5PM"))
});


function ListTimes() {
    
    for (i = 0; i < TimeWorkDay.length; i++) {
        var newRow = $("<tr>")
        
        var newHour = $("<td>").text(TimeWorkDay[i]);
        var newToDO = $("<textarea>");
        var newSaveBtn = $("<button>");
        var newCompleteBtn = $("<button>");

        newSaveBtn.text("Save")
        newSaveBtn.attr({
            class: "SaveBtn btn btn-primary",
            id: "SaveBtn",
        });

        newCompleteBtn.text("Complete")
        newCompleteBtn.attr({
            id: "CompleteBtn" + TimeWorkDay[i],
            class: "CompleteBtn btn btn-success"
        });

        newSaveBtn.attr("id", "Btn" + TimeWorkDay[i])
        newHour.attr("id", "label" + TimeWorkDay[i])
        newToDO.attr("id", "txt" + TimeWorkDay[i])


        newRow.append(newHour, newToDO, newCompleteBtn, newSaveBtn)
    
        $("tbody").append(newRow);

    }
}
ListTimes();

//Click Events
$("#Btn9AM").click(function(){

    var Txt9AM = $("#txt9AM").val()
    localStorage.setItem("ToDo9AM", Txt9AM)

});

$("#Btn10AM").click(function(){
    
    var Txt10AM = $("#txt10AM").val()
    localStorage.setItem("ToDo10AM", Txt10AM)

});

$("#Btn11AM").click(function(){
   
    var Txt11AM = $("#txt11AM").val()
    localStorage.setItem("ToDo11AM", Txt11AM)
      
});

$("#Btn12PM").click(function(){
   
    var Txt12PM = $("#txt12PM").val()
    localStorage.setItem("ToDo12PM", Txt12PM)
     
});

$("#Btn1PM").click(function(){
    
    var Txt1PM = $("#txt1PM").val()
    localStorage.setItem("ToDo1PM", Txt1PM)
});

$("#Btn2PM").click(function(){
    
    var Txt2PM = $("#txt2PM").val()
    localStorage.setItem("ToDo2PM", Txt2PM)
     
});

$("#Btn3PM").click(function(){
   
    var Txt3PM = $("#txt3PM").val()
    localStorage.setItem("ToDo3PM", Txt3PM)
     
});


$("#Btn4PM").click(function(){
   
    var Txt4PM = $("#txt4PM").val()
    localStorage.setItem("ToDo4PM", Txt4PM)
      
});

$("#Btn5PM").click(function(){
    
    var Txt5PM = $("#txt5PM").val()
    localStorage.setItem("ToDo5PM", Txt5PM)
     
});

$(document).on("click", "#SaveAllBtn", function() {
   
    var Txt9AM = $("#txt9AM").val()
    var Txt10AM = $("#txt10AM").val()
    var Txt11AM = $("#txt11AM").val()
    var Txt12PM = $("#txt12PM").val()
    var Txt1PM = $("#txt1PM").val()
    var Txt2PM = $("#txt2PM").val()
    var Txt3PM = $("#txt3PM").val()
    var Txt4PM = $("#txt4PM").val()
    var Txt5PM = $("#txt5PM").val()
        
    localStorage.setItem("ToDo9AM", Txt9AM)
    localStorage.setItem("ToDo10AM", Txt10AM)
    localStorage.setItem("ToDo11AM", Txt11AM)
    localStorage.setItem("ToDo12PM", Txt12PM)
    localStorage.setItem("ToDo1PM", Txt1PM)
    localStorage.setItem("ToDo2PM", Txt2PM)
    localStorage.setItem("ToDo3PM", Txt3PM)
    localStorage.setItem("ToDo4PM", Txt4PM)
    localStorage.setItem("ToDo5PM", Txt5PM)
});

$(document).on("click", "#CompleteAllBtn", function() {

    localStorage.removeItem("ToDo9AM")
    localStorage.removeItem("ToDo10AM")
    localStorage.removeItem("ToDo11AM")
    localStorage.removeItem("ToDo12PM")
    localStorage.removeItem("ToDo1PM")
    localStorage.removeItem("ToDo2PM")
    localStorage.removeItem("ToDo3PM")
    localStorage.removeItem("ToDo4PM")
    localStorage.removeItem("ToDo5PM")

    window.location.reload()
});

