const todoList = [];

function todoHTML()
{
let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++)
    {
        const list = todoList[i];
        let html = `<p>${list}</p>`;
        todoListHTML += html;
    }   
document.querySelector(`.js-output-name`).innerHTML = todoListHTML;
}

function todoInput()
{
const inputElement = document.querySelector(`.js-input-name`);
const todoName = inputElement.value;

todoList.push(todoName);

console.log(todoList);

inputElement.value = '';
todoHTML();
}