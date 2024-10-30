document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", toggleTaskCompletion);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = () => {
            li.remove();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }

    function toggleTaskCompletion(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    }
});
