const taskField = document.querySelector("#task-form__input");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector(".task-list");

const addTaskHandler = (e) => {
    e.preventDefault();

    const newTask = taskField.value;
    taskField.value = "";

    const newTaskElement = document.createElement("li")
    newTaskElement.classList.add("task-list-item")
    newTaskElement.appendChild(document.createTextNode(newTask))

    taskList.appendChild(newTaskElement)
}

taskForm.addEventListener("submit", addTaskHandler);