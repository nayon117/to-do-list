 
document.querySelector("#task-list").addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})

document.querySelector("#input-btn").addEventListener('click', function () {
    const inputField = document.querySelector("#input-field");
    const inputValue = inputField.value;
    const p = document.createElement("p");
    p.textContent = inputValue;

    const taskList = document.querySelector("#task-list");
    taskList.appendChild(p);
    inputField.value = "";
})

document.querySelector("#input-field").addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        const inputField = document.querySelector("#input-field");
        const inputValue = inputField.value;
        const p = document.createElement("p");
        p.textContent = inputValue;
    
        const taskList = document.querySelector("#task-list");
        taskList.appendChild(p);
        inputField.value = "";
    }
})