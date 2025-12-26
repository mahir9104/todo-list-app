let input = document.getElementById("input");
let add_btn = document.getElementById("btn");
let dlt_btn = document.getElementById("dlt-btn");
let list_container = document.getElementById("list-container");

let todos = [];

add_btn.addEventListener("click", () => {
    let input_data = input.value.trim()

    if (input_data === "") {
        return;
    }
    todos.push(input_data);
    saveTodos();
    renderTodos();
    input.value = "";
});

const renderTodos = () => {
    list_container.innerHTML = "";

    todos.forEach((list) => {
        let li = document.createElement("li");
        li.textContent = list;
        list_container.appendChild(li);
    });
}

dlt_btn.addEventListener("click", () => {
    todos.pop();
    saveTodos();
    renderTodos();
});


document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        add_btn.click();
    }

    if (e.key === "Delete") {
        if (todos.length === 0) return;
        todos.pop();
        saveTodos()
        renderTodos();
    }
});

const saveTodos = () => {
    localStorage.setItem("todo_app_tasks", JSON.stringify(todos));
};


const load_Todos = () => {
    const storedTodos = localStorage.getItem("todo_app_tasks");

    if(storedTodos){
        todos = JSON.parse(storedTodos);
        renderTodos();
    }
}
load_Todos();