const todoList = [];

function todoInput()
{
const inputElement = document.querySelector(`.js-input-name`);
const todoName = inputElement.value;

todoList.push(todoName);

console.log(todoList);

inputElement.value = '';
}