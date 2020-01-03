var TimeWorkDay = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

var Table = $("#TimeTable")

function ListTimes() {
    
    for (i = 0; i < TimeWorkDay.length; i++) {
        var newRow = $("<tr>")
        
        var newHour = $("<td>").text(TimeWorkDay[i]);
        var newToDO = $("<textarea>");
        var newSaveBtn = $("<button>");

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

function Save() {    
    localStorage.setItem("Table", Table)
}

$("#SaveBtn").on("click", function() {
    Save();
})

ListTimes();
