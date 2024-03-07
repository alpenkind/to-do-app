console.log("TEST");

//Hinzufügen neuer Todos
const addButton = document.querySelector(".btn.add");
const input = document.querySelector("#task-input");
const taskContainer = document.querySelector(".ctn-tasks");

function addInput(params) {
  if (inputValue !== " ") {
    //new task-ctn
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    //new checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //new span
    const taskText = document.createElement("span");
    taskText.textContent = inputValue;

    //adding checkbox & span to taskItem div
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);

    //adding to ctn-tasks
    taskContainer.appendChild(taskItem);
  }
}

addButton.addEventListener("click", addInput);

// Erledigt-Status von Todos

// Duplikatprüfung

//Lokaler Speicher Adaption

//Filtern von Todos

//Erledigte ToDos entfernen
