console.log("JavaScript working!");

const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Retrieve value from task-input
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    //Create list item
    const listItem = document.createElement("li");

    //Create paragraph
    const taskParagraph = document.createElement("p");
    taskParagraph.textContent = taskText;

    //Add paragraph to li
    listItem.appendChild(taskParagraph);

    //Add li to ul
    taskList.appendChild(listItem);

    //Clear input field
    taskInput.value = "";
} )