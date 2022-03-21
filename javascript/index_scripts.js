var TimeWorkDay = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
var TimeMilitary = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
const toDoCol = $("#toDo");
const inProgressCol = $("#inProgress");
const doneCol = $("#done");

$(document).ready(function() {
    alert("Welcome to Task Manager! Click the add (+) button on the 'To Do' column to add a new task. Save it, and drag it to the other columns as needed!");

    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(function(task) {
        
        const listGroup = $("<div id='" + task.id + "'" + "class='list-group m-2 text-center' draggable='true' ondragstart='drag(event)'>");

        const listGroupItem = $("<div id='item_" + task.id + "'" + "class='list-group-item list-group-item-action'>");

        const inputTitle = $("<input id='title_" + task.id + "'" + "placeholder='Task Title' />");
        inputTitle.val(task.title)

        const textarea = $("<textarea id='details_" + task.id + "'" + "placeholder='Task Details...'>");
        textarea.text(task.details)

        const smallText = $("<small id='dateCreated_" + task.id + "'" + "class='added-date'>");
        smallText.text(task.dateCreated);
    
        const saveButton = $("<button class='save-button' onclick='save(" + task.id + ")" + "'>");
        const deleteButton = $("<button class='delete-button' onclick='deleteTask(" + task.id + ")" + "'>");
    
        const faSave = $("<i class='fa fa-save'></i>");
        const faDelete = $("<i class='fa fa-trash'></i>");
    
        saveButton.append(faSave);
        deleteButton.append(faDelete);
        listGroupItem.append(inputTitle, textarea, smallText, saveButton, deleteButton);
        listGroup.append(listGroupItem);

        if (task.status === "toDo") {
            toDoCol.append(listGroup);
        } else if (task.status === "inProgress"){
            inProgressCol.append(listGroup);
        } else {
            doneCol.append(listGroup); 
        } 
    });

    const DateDisplay = $("#currentDate");
    var currentDate = moment().format('LL');
    DateDisplay.text(currentDate);
});

$(".add-button").click( () => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split('');
    // const numbers = "0123456789".split('')
    const idLength = 6;
    const idNewTaskArray = [];

    for (let i = 0; i < idLength; i++) {
        var letter = letters[Math.floor(Math.random() * letters.length)];
        // var number = numbers[Math.floor(Math.random() * numbers.length)];
        idNewTaskArray.push(letter);
        // idNewTask.push(number);
        
    }
    var idNewTask = idNewTaskArray.join('').toString();
    console.log(idNewTask)
    var currentDate = moment().format('l, h:mm:ss a');
    
    const listGroup = $("<div id='" + idNewTask + "'" + "class='list-group m-2 text-center' draggable='true' ondragstart='drag(event)'>");
    const listGroupItem = $("<div id='item_" + idNewTask + "'" + "class='list-group-item list-group-item-action'>");
    const inputTitle = $("<input id='title_" + idNewTask + "'" + "placeholder='Task Title' />");
    const textarea = $("<textarea id='details_" + idNewTask + "'" + "placeholder='Task Details...'>")
    const smallText = $("<small id='dateCreated_" + idNewTask + "'" + "class='added-date'>");
    smallText.text("Created: " + currentDate);

    const saveButton = $("<button class='save-button' onclick='save(" + idNewTask + ")" + "'>");
    const deleteButton = $("<button class='delete-button' onclick='deleteTask(" + idNewTask + ")" + "'>");

    const faSave = $("<i class='fa fa-save'></i>");
    const faDelete = $("<i class='fa fa-trash'></i>");

    saveButton.append(faSave);
    deleteButton.append(faDelete);

    listGroupItem.append(inputTitle, textarea, smallText, saveButton, deleteButton);
    listGroup.append(listGroupItem);
    toDoCol.append(listGroup);

})

function save(task) {
    const title = $("#title_" + task.id).val();
    const details = $("#details_" + task.id).val();
    const dateCreated = $("#dateCreated_" + task.id).text();

    // load local storage
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // create task object
    var newTask = {
        "id": task.id, 
        "title": title,
        "details": details,
        "dateCreated": dateCreated,
        "status": "toDo",
    };

    // Push to local storage array
    tasks.push(newTask);

    // save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

function deleteTask(task) {
    // console.log(task.id);
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
 

    for (let i = 0; i < tasks.length; i++) {
        if (task.id === tasks[i].id) {
            const index = tasks.findIndex(item => item.id === task.id);
            tasks.splice(index, 1)

             // save to local storage
            localStorage.setItem("tasks", JSON.stringify(tasks)); 
            window.location.reload();
        }
    }
    // let index = selectedTask.findIndex(id => id == selectedTask.id)
    // console.log(selectedTask);
}

// Drag & Drop Functionality
function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}