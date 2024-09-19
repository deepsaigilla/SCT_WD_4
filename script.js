document.getElementById("add-task").addEventListener("click", function() {
    const taskText = document.getElementById("task-input").value;
    const taskTime = document.getElementById("task-time").value;
    if (taskText && taskTime) {
        addTask(taskText, taskTime);
        clearInputs();
    } else {
        alert("Please enter both task and time!");
    }
});

function addTask(taskText, taskTime) {
    const taskList = document.getElementById("task-list");

    const taskItem = document.createElement("li");

    const taskContentDiv = document.createElement("div");
    taskContentDiv.classList.add("task-content");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const taskTimeElem = document.createElement("span");
    taskTimeElem.classList.add("task-time");
    taskTimeElem.textContent = `Due: ${new Date(taskTime).toLocaleString()}`;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("task-buttons");

    const editButton = createButton("Edit", "edit");
    const deleteButton = createButton("Delete", "delete");
    const completeButton = createButton("Complete", "complete");

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    taskContentDiv.appendChild(taskContent);
    taskContentDiv.appendChild(taskTimeElem);

    taskItem.appendChild(taskContentDiv);
    taskItem.appendChild(buttonsDiv);

    taskList.appendChild(taskItem);

    completeButton.addEventListener("click", () => {
        // Toggle the 'completed' class
        taskItem.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });

    editButton.addEventListener("click", () => {
        editTask(taskContent);
    });
}

function createButton(text, className) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    return button;
}

function clearInputs() {
    document.getElementById("task-input").value = "";
    document.getElementById("task-time").value = "";
}

function editTask(taskContent) {
    const newTaskText = prompt("Edit your task", taskContent.textContent);
    if (newTaskText) {
        taskContent.textContent = newTaskText;
    }
}
