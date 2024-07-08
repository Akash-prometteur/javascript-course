const todoList = [
  { name: "Test", dueDate: "2022-12-22" },
  { name: "Test", dueDate: "2022-12-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">
            Delete 
        </button>
        `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector("js-add-todo-button").addEventListener("click", () => {
  addToDo();
});

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-due-date");

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";

  renderTodoList();
}
