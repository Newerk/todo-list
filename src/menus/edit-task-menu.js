import './new-task-menu.css';
import { storageManagement } from '../local-storage';
import { buildPopUpMenu } from './priority-popup-menu';
import { todoFilterLogic } from '../todoFilterLogic';
import { updateInfo } from '../update-info';
import { todoListRows } from '../todo_row/todo';
import { dueDateValue } from './new-task-menu';


export const editTaskWindow = () => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.className = 'new-task-container';


    const topContainer = document.createElement('div');
    topContainer.className = 'nt-top-container';

    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';


    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';


    const titleInput = document.createElement('input');
    titleInput.id = 'title-input';
    titleInput.type = 'text';
    titleInput.required = true;
    titleInput.value = storageManagement.titleOfActiveRow;
    titleInput.autofocus = true;

    const prioDateWrapper = document.createElement('div');
    prioDateWrapper.id = 'priority-date-wrapper';

    const priorityBtn = document.createElement('button');
    priorityBtn.id = 'priority-btn';
    priorityBtn.textContent = storageManagement.priorityOfActiveRow;
    switch (priorityBtn.textContent) {
        case 'Normal':
            priorityBtn.setAttribute('style', 'background-color: skyblue;');
            storageManagement.priorityMenuActive.value = false;

            break;

        case 'High':
            priorityBtn.setAttribute('style', 'background-color: yellow;');
            storageManagement.priorityMenuActive.value = false;

            break;

        case 'Urgent':
            priorityBtn.setAttribute('style', 'background-color: red;');
            storageManagement.priorityMenuActive.value = false;

            break;

    }


    priorityBtn.addEventListener('click', (e) => {
        const priorityMenu = document.createElement('div');
        priorityMenu.id = 'priority-menu';


        if (storageManagement.priorityMenuActive.value === false) {
            priorityMenu.appendChild(buildPopUpMenu());
            priorityMenu.setAttribute('style', 'position: absolute; width: width: 6rem;')

            priorityBtn.appendChild(priorityMenu);

            storageManagement.priorityMenuActive.value = true;

        } else {
            document.getElementById('priority-menu').remove();
            storageManagement.priorityMenuActive.value = false;
        }

        switch (e.target.id) {
            case 'normal-priority-btn':
                priorityBtn.textContent = 'NORMAL';
                priorityBtn.setAttribute('style', 'background-color: skyblue;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'high-priority-btn':
                priorityBtn.textContent = 'HIGH';
                priorityBtn.setAttribute('style', 'background-color: yellow;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'urgent-priority-btn':
                priorityBtn.textContent = 'URGENT';
                priorityBtn.setAttribute('style', 'background-color: red;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

        }
    })

    const dueDateBtn = document.createElement('input');
    dueDateBtn.id = 'due-date-btn';
    dueDateBtn.type = 'date';
    dueDateBtn.textContent = 'Due Date';

    prioDateWrapper.appendChild(priorityBtn);
    prioDateWrapper.appendChild(dueDateBtn);

    const exitBtn = document.createElement('button');
    exitBtn.id = 'exit-btn';
    exitBtn.textContent = 'X'
    exitBtn.addEventListener('click', () => {
        if (storageManagement.editTaskMenuActive.value === true) {
            newTaskContainer.remove();
            storageManagement.editTaskMenuActive.value = false;
        }

    })

    topContainer.appendChild(titleInput);
    topContainer.appendChild(prioDateWrapper);
    topContainer.appendChild(exitBtn);


    const descriptionTopText = document.createElement('p');
    descriptionTopText.id = 'description-text';
    descriptionTopText.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description-input';

    middleContainer.appendChild(descriptionTopText);
    middleContainer.appendChild(descriptionInput);



    //right now this adds a new task instead of editing the selected task
    const editTaskBtn = document.createElement('button');
    editTaskBtn.id = 'add-task-btn';
    editTaskBtn.textContent = 'SAVE CHANGES';
    editTaskBtn.addEventListener('click', () => {
        let rows = JSON.parse(localStorage.getItem('rows'));
        const todoObj = {};
        const targetedRow = document.getElementById(storageManagement.idOfActiveRow);
        console.log(`targeted row: ${targetedRow.id}`)



        if (titleInput.value === '') {
            console.log('please enter a title');
            titleInput.setAttribute('style', 'background-color: rgb(246,166,166, .1) ')
            titleInput.addEventListener('input', () => titleInput.setAttribute('style', 'background-color: none;'))
            return;

        } else

            if (storageManagement.editTaskMenuActive.value === true) {
                let row = JSON.parse(localStorage.getItem('rows'));

                targetedRow.querySelector('#row-title').textContent = titleInput.value;

                let matchingRow = row.find(obj => obj.id === targetedRow.id);

                //new values that will be updated by the user changes
                matchingRow.title = titleInput.value;
                matchingRow.dueDate = dueDateValue(matchingRow, dueDateBtn.value); // not working for some reason
                matchingRow.priority = priorityChecker(matchingRow, priorityBtn.textContent);


                localStorage.setItem('rows', JSON.stringify(row));
                console.log(JSON.parse(localStorage.getItem('rows')))
                
                newTaskContainer.remove();
                storageManagement.editTaskMenuActive.value = false;
                updateInfo();
            }

        console.log(`ID of active row: ${storageManagement.idOfActiveRow}`)
    })

    bottomContainer.appendChild(editTaskBtn);

    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(bottomContainer)

    return newTaskContainer;
}

function priorityChecker(obj, priorityBtnTextContent) {

    switch (priorityBtnTextContent) {
        case 'Priority':
            obj.priority = 'Normal';

            break;
        case 'Normal':
            obj.priority = 'Normal';

            break;
        case 'High':
            obj.priority = 'High';

            break;
        case 'Urgent':
            obj.priority = 'Urgent';

            break;
    }

    return obj.priority;
}
