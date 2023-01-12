import { buildNewTaskWindow } from "../menus/new-task-menu";
import { storageManagement } from "../local-storage";

/*
later on this module will only prompt the new-task.js which will handle adding the custom tasks to the page. This button feature 
is able to currently add rows because its a quick way for me to see changes and interactions while writing this program
*/


export const newTaskBtn = (querySelector) => {
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('style', 'display: flex; width: auto; height: 2rem;');
    btnContainer.className = 'new-task-btn';
    btnContainer.style.cursor = 'pointer';
    const symbol = document.createElement('button');//when adding the assets, perhaps I will remove this and use ::before in CSS. I will keep this variable here for reference
    symbol.id = 'symbol';
    symbol.style.backgroundImage = 'url(../src/images/icons/plus.svg)';

    btnContainer.addEventListener('click', () => {
        
        if (storageManagement.newTaskMenuActive.value === false) {
            document.body.querySelector(`${querySelector}`).appendChild(buildNewTaskWindow());
            storageManagement.newTaskMenuActive.value = true;
        } else {
            console.log('there is a window already opened')
        }


    })

    const newTask = document.createElement('div');
    newTask.textContent = 'New Task';
    newTask.setAttribute('style', 'color: white')

    btnContainer.appendChild(symbol);
    btnContainer.appendChild(newTask);

    return btnContainer
}
