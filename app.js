// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// Event Listener
todoButton.addEventListener('click', addTodo);

// Function
function addTodo(event) {
  // Block Refresh Page
  event.preventDefault();

  // Create Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create li
  const todoLi = document.createElement('li');
  todoLi.innerText = todoInput.value;
  todoLi.classList.add('todo-item');
  todoDiv.appendChild(todoLi);

  // Create Completed Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // Create Delete Button
  const deletedButton = document.createElement('button');
  deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
  deletedButton.classList.add('delete-btn');
  todoDiv.appendChild(deletedButton);

  //   Create UL
  todoList.appendChild(todoDiv);

  //  Clear Todo Input Value
  todoInput.value = '';
}
