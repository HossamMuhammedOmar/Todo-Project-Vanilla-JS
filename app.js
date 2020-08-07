// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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

function deleteCheck(e) {
  console.log(e.target);
  const item = e.target;
  // DELTE
  if (item.classList[0] === 'delete-btn') {
    new Audio('delete.wav').play();
    item.parentElement.classList.add('fall');
    // item.parentElement.ontransitionend(function () {
    //   item.parentElement.remove();
    // });
    item.parentElement.remove();
  }

  // Complete
  if (item.classList[0] === 'complete-btn') {
    item.parentElement.classList.toggle('completed');
    console.log(item.parentElement.classList[1]);
    if (item.parentElement.classList[1] === 'completed')
      new Audio('complete.wav').play();
    else new Audio('return.wav').play();
  }
}
