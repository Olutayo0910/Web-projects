const todoList = [{
    list: 'clean',
    dueDate: '2023-07-06'
},
{
    list: 'cleanTay',
    dueDate: '2023-08-06' 
    
}];

function todoHTML()
{
let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++)
    {
        const listDateObject = todoList[i];
        const list = listDateObject.list;
        const dueDate = listDateObject.dueDate;

        let html = `
        <div class="objects">
            <div>${list}</div> 
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                todoHTML();
                " class="delete-todo">Delete</button>
        </div>
            `;
        todoListHTML += html;
    }   
document.querySelector(`.js-output-name`).innerHTML = todoListHTML;
}

function todoInput()
{
const inputElement = document.querySelector(`.js-input-name`);
const todoName = inputElement.value;

const inputdueDate = document.querySelector(`.js-input-date`);
const dueDate = inputdueDate.value;

todoList.push({
    list: todoName,
    dueDate: dueDate
});

console.log(todoList);

inputElement.value = '';
todoHTML();
}