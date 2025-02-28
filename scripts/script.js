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
    listItem.classList.add("task-item");

    //Create paragraph
    const taskParagraph = document.createElement("p");
    taskParagraph.textContent = taskText;
    taskParagraph.classList.add("task-text");

    // Create complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        taskParagraph.classList.toggle("completed");
    });
    
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    });
    
    // Append elements to list item
    listItem.appendChild(completeBtn);
    listItem.appendChild(taskParagraph);
    listItem.appendChild(deleteBtn);
    
    // Append list item to task list
    taskList.appendChild(listItem);
    
    // Clear input field
    taskInput.value = "";
} )