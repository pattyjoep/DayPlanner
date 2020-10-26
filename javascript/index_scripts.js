var TimeWorkDay = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
var TimeMilitary = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
var Table = $("#TimeTable")

$(document).ready(function() {

    var DateDisplay = document.querySelector("#currentDate")
    var currentDate = moment().format('LL');

    // var Time = moment().format('LTS');
    // var TimeDisplay = document.querySelector("#currentTime")
        
    DateDisplay.textContent = currentDate
    //TimeDisplay.textContent = Time


    var newSaveAllBtn = $("<button>")
    var newCompleteAllBtn = $("<button>")
    var FAusb = $("<i>")
    var FaDelete = $("<i>")

    newSaveAllBtn.text(" (All)")
    newSaveAllBtn.attr({
        id: "SaveAllBtn",
        class: "SaveAllBtn btn btn-primary"
    })

    FAusb.attr("class", "fa fa-save")

    newSaveAllBtn.prepend(FAusb)


    newCompleteAllBtn.text(" (All)")
    newCompleteAllBtn.attr({
        id: "CompleteAllBtn",
        class: "CompleteAllBtn btn btn-danger"
    })
    
    FaDelete.attr("class", "fa fa-trash")
    newCompleteAllBtn.prepend(FaDelete)


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
        var FAusb = $("<i>")
        var FaDelete = $("<i>")

        newSaveBtn.attr({
            class: "SaveBtn btn btn-primary",
            id: "SaveBtn",
        });

        FAusb.attr("class", "fa fa-save")

        newSaveBtn.append(FAusb)

        newCompleteBtn.attr({
            id: "CompleteBtn" + TimeWorkDay[i],
            class: "CompleteBtn btn btn-danger"
        });

        FaDelete.attr("class", "fa fa-trash")
        newCompleteBtn.append(FaDelete)

        newSaveBtn.attr("id", "Btn" + TimeWorkDay[i])
        newHour.attr({
            id: "label" + TimeWorkDay[i],
            class: "hourlbl"
        });
        
        newToDO.attr("id", "txt" + TimeWorkDay[i])


        newRow.append(newHour, newToDO, newCompleteBtn, newSaveBtn)
    
        $("tbody").append(newRow);

        var currentHour = moment().hour()
        var NineAM = $("#txt9AM")
            if (currentHour < 9){
                NineAM.attr("class", "futureHr")
            } else if (currentHour === 9) {
                NineAM.attr("class", "currentHr")
            } else {
                NineAM.attr("class", "pastHr")
            }

        var TenAM = $("#txt10AM")
            if (currentHour < 10){
                TenAM.attr("class", "futureHr")
            } else if (currentHour === 10) {
                TenAM.attr("class", "currentHr")
            } else {
                TenAM.attr("class", "pastHr")
            }

        var ElevenAM = $("#txt11AM")
            if (currentHour < 11){
                ElevenAM.attr("class", "futureHr")
            } else if (currentHour === 11) {
                ElevenAM.attr("class", "currentHr")
            } else {
                ElevenAM.attr("class", "pastHr")
            }

        var TwelveAM = $("#txt12PM")
            if (currentHour < 12){
                TwelveAM.attr("class", "futureHr")
            } else if (currentHour === 12) {
                TwelveAM.attr("class", "currentHr")
            } else {
                TwelveAM.attr("class", "pastHr")
            }
            
        var OnePM = $("#txt1PM")
            if (currentHour < 13){
                OnePM.attr("class", "futureHr")
            } else if (currentHour === 13) {
                OnePM.attr("class", "currentHr")
            } else {
                OnePM.attr("class", "pastHr")
            }

        var TwoPM = $("#txt2PM")
            if (currentHour < 14){
                TwoPM.attr("class", "futureHr")
            } else if (currentHour === 14) {
                TwoPM.attr("class", "currentHr")
            } else {
                TwoPM.attr("class", "pastHr")
            }

        var ThreePM = $("#txt3PM")
            if (currentHour < 15){
                ThreePM.attr("class", "futureHr")
            } else if (currentHour === 15) {
                ThreePM.attr("class", "currentHr")
            } else {
                ThreePM.attr("class", "pastHr")
            }

            var FourPM = $("#txt4PM")
            if (currentHour < 16){
                FourPM.attr("class", "futureHr")
            } else if (currentHour === 16) {
                FourPM.attr("class", "currentHr")
            } else {
                FourPM.attr("class", "pastHr")
            }

            var FivePM = $("#txt5PM")
            if (currentHour < 17){
                FivePM.attr("class", "futureHr")
            } else if (currentHour === 17) {
                FivePM.attr("class", "currentHr")
            } else {
                FivePM.attr("class", "pastHr")
            }
    }
}
ListTimes();

//Click Events
$("#Btn9AM").click(function(){

    var Txt9AM = $("#txt9AM").val()
    localStorage.setItem("ToDo9AM", Txt9AM)

    window.location.reload()

});

$("#Btn10AM").click(function(){
    
    var Txt10AM = $("#txt10AM").val()
    localStorage.setItem("ToDo10AM", Txt10AM)

    window.location.reload()

});

$("#Btn11AM").click(function(){
   
    var Txt11AM = $("#txt11AM").val()
    localStorage.setItem("ToDo11AM", Txt11AM)

    window.location.reload()
      
});

$("#Btn12PM").click(function(){
   
    var Txt12PM = $("#txt12PM").val()
    localStorage.setItem("ToDo12PM", Txt12PM)

    window.location.reload()
     
});

$("#Btn1PM").click(function(){
    
    var Txt1PM = $("#txt1PM").val()
    localStorage.setItem("ToDo1PM", Txt1PM)

    window.location.reload()
});

$("#Btn2PM").click(function(){
    
    var Txt2PM = $("#txt2PM").val()
    localStorage.setItem("ToDo2PM", Txt2PM)

    window.location.reload()
     
});

$("#Btn3PM").click(function(){
   
    var Txt3PM = $("#txt3PM").val()
    localStorage.setItem("ToDo3PM", Txt3PM)

    window.location.reload()
     
});


$("#Btn4PM").click(function(){
   
    var Txt4PM = $("#txt4PM").val()
    localStorage.setItem("ToDo4PM", Txt4PM)

    window.location.reload()
      
});

$("#Btn5PM").click(function(){
    
    var Txt5PM = $("#txt5PM").val()
    localStorage.setItem("ToDo5PM", Txt5PM)

    window.location.reload()
     
});

$("#CompleteBtn9AM").click(function(){

    localStorage.removeItem("ToDo9AM")
    window.location.reload()
    
});

$("#CompleteBtn10AM").click(function(){

    localStorage.removeItem("ToDo10AM")
    window.location.reload()
    
});

$("#CompleteBtn11AM").click(function(){

    localStorage.removeItem("ToDo11AM")
    window.location.reload()
    
});

$("#CompleteBtn12PM").click(function(){

    localStorage.removeItem("ToDo12PM")
    window.location.reload()
    
});

$("#CompleteBtn1PM").click(function(){

    localStorage.removeItem("ToDo1PM")
    window.location.reload()
    
});

$("#CompleteBtn2PM").click(function(){

    localStorage.removeItem("ToDo2PM")
    window.location.reload()
    
});

$("#CompleteBtn3PM").click(function(){

    localStorage.removeItem("ToDo3PM")
    window.location.reload()
    
});

$("#CompleteBtn4PM").click(function(){

    localStorage.removeItem("ToDo4PM")
    window.location.reload()
    
});

$("#CompleteBtn5PM").click(function(){

    localStorage.removeItem("ToDo5PM")
    window.location.reload()
    
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

    window.location.reload()
});

$(document).on("click", "#CompleteAllBtn", function() {

    var Confirm = confirm("Are you sure you want to complete all tasks?")
        if (Confirm === true){

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
        } 
        else {
            
        }
});


