var TimeWorkDay = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

var Table = $("#TimeTable")

function ListTimes() {
    
    for (i = 0; i < TimeWorkDay.length; i++) {
        var newRow = $("<tr>")
        
        var newHour = $("<td>").text(TimeWorkDay[i]);
        var newToDO = $("<textarea>");
        var newSaveBtn = $("<button>");


        newToDO.attr("value", )

        newSaveBtn.text("Save")
        newSaveBtn.attr({
            class: "SaveBtn btn btn-success",
            id: "SaveBtn",
        });

        newSaveBtn.attr("id", "Btn" + TimeWorkDay[i])
        newHour.attr("id", "label" + TimeWorkDay[i])
        newToDO.attr("id", "txt" + TimeWorkDay[i])


        newRow.append(newHour, newToDO, newSaveBtn)
    
        $("tbody").append(newRow);

    }
}

ListTimes();


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
    if (typeof(Storage) !== "undefined") {
        // Store
        var Txt1PM = $("#txt1PM").val()
        localStorage.setItem("ToDo1PM", Txt1PM)
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
});

$("#Btn2PM").click(function(){
    if (typeof(Storage) !== "undefined") {
        // Store
        var Txt2PM = $("#txt2PM").val()
        localStorage.setItem("ToDo2PM", Txt2PM)
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
});

$("#Btn3PM").click(function(){
    if (typeof(Storage) !== "undefined") {
        // Store
        var Txt3PM = $("#txt3PM").val()
        localStorage.setItem("ToDo3PM", Txt3PM)
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
});


$("#Btn4PM").click(function(){
    if (typeof(Storage) !== "undefined") {
        // Store
        var Txt4PM = $("#txt4PM").val()
        localStorage.setItem("ToDo4PM", Txt4PM)
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
});

$("#Btn5PM").click(function(){
    if (typeof(Storage) !== "undefined") {
        // Store
        var Txt5PM = $("#txt5PM").val()
        localStorage.setItem("ToDo5PM", Txt5PM)
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
});

$(document).ready(function() {
    var DateDisplay = document.querySelector("#currentDate")
    var currentDate = moment().format('LL');

    DateDisplay.textContent = currentDate


    var Time = moment().format('LTS');
    var TimeDisplay = document.querySelector("#currentTime")

    TimeDisplay.textContent = Time

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

