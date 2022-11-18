import { buildNewTaskWindow } from "../menus/new-task-menu";
import { storageManagement } from "../local-storage";
import { getCount } from "..";

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
    symbol.id = 'symbol';
    symbol.setAttribute('style', 'background-color: orange; border-radius: 50%; width: 1.5rem; height: 1.5rem ;text-align: center;');

    symbol.addEventListener('click', () => {
        
        if (storageManagement.newTaskMenuActive.value === false) {
            document.body.querySelector('.top-container').appendChild(buildNewTaskWindow());
            storageManagement.newTaskMenuActive.value = true;
        } else {
            console.log('there is a window already opened')
        }


    })

    const newTask = document.createElement('div');
    newTask.textContent = 'New Task';

    btnContainer.appendChild(symbol);
    btnContainer.appendChild(newTask);

    return btnContainer
}
