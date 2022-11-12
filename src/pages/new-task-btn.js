import { content } from "..";
import { buildNewTaskWindow } from "../menus/new-task-menu";
import { todoListRows } from "../todo_row/todo";

/*
later on this module will only prompt the new-task.js which will handle adding the custom tasks to the page. This button feature 
is able to currently add rows because its a quick way for me to see changes and interactions while writing this program
*/

export const newTaskBtn = () => {
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('style', 'display: flex; width: auto; height: 2rem');
    btnContainer.className = 'new-task-btn';
    const symbol = document.createElement('div');//when adding the assets, perhaps I will remove this and use ::before in CSS. I will keep this variable here for reference
    symbol.textContent = '+';
    symbol.setAttribute('style', 'background-color: orange; border-radius: 50%; width: 1.5rem; height: 1.5rem ;text-align: center;');

    symbol.addEventListener('click', () => {
//add a boolean that checks whether the menu is already open or not so that the user cannot keep pressing the add new task button 

        document.body.querySelector('.top-container').appendChild(buildNewTaskWindow());
        
    })

    const newTask = document.createElement('div');
    newTask.textContent = 'New Task';

    btnContainer.appendChild(symbol);
    btnContainer.appendChild(newTask);

    return btnContainer
}
