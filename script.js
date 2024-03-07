console.log("TEST");

//Variables
const todoInput = document.querySelector("#task-input");
const taskContainer = document.querySelector(".ctn-tasks");
const form = document.querySelector(".ctn-input");
let todos = [];

//add todos to todolist
function addTodo(event) {
  event.preventDefault();

  const inputValue = todoInput.value.trim();

  if (inputValue !== "") {
    //creating object
    const newTodo = {
      description: inputValue,
      done: false,
      id: Math.floor(Math.random() * 99999999),
    };
    //Push & render
    todos.push(newTodo);
    renderTodo(newTodo);
    //TEST
    console.log(todos);
    //Clear Value
    todoInput.value = "";

    //TEST
    console.log(newTodo);
  }
}
//Creating new todo
function renderTodo(todo) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  //Create Checkbox and connect with Object status done: true/false
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "task-" + todo.id;
  checkBox.checked = todo.done;
  checkbox.todoObj = todo;

  //Create label, set ID and connect with Object description
  const taskText = document.createElement("label");
  taskText.textContent = todo.description;
  taskText.setAttribute("for", "task-" + todo.id);

  //Add checkbox and label to task-Item (html-div)
  taskItem.appendChild(checkBox);
  taskItem.appendChild(taskText);
  //add to task-container
  taskContainer.appendChild(taskItem);
}
//Eventlistener submit input
form.addEventListener("submit", addTodo);

// Duplikatprüfung

//Lokaler Speicher Adaption

//Filtern von Todos

//Erledigte ToDos entfernen
