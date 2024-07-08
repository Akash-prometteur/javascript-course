const todoList = [
  { name: "Test", dueDate: "2022-12-22" },
  { name: "Test", dueDate: "2022-12-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">
            Delete 
        </button>
        `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-due-date");

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";

  renderTodoList();
}
