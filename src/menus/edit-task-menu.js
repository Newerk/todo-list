import './new-task-menu.css';
import { storageManagement } from '../local-storage';
import { buildPopUpMenu } from './priority-popup-menu';
import { updateProjectTasksLS, updateScreenProjectsLS, updateScreenTasksLS } from '../update-info';
import { dueDateValue, priorityChecker } from './new-task-menu';


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
            priorityBtn.setAttribute('style', 'background-color: #58CFFE;');
            storageManagement.priorityMenuActive.value = false;

            break;

        case 'High':
            priorityBtn.setAttribute('style', 'background-color: #FEEA00;');
            storageManagement.priorityMenuActive.value = false;

            break;

        case 'Urgent':
            priorityBtn.setAttribute('style', 'background-color: #FF1337;');
            storageManagement.priorityMenuActive.value = false;

            break;

    }


    priorityBtn.addEventListener('click', (e) => {
        const priorityMenu = document.createElement('div');
        priorityMenu.id = 'priority-menu';


        if (storageManagement.priorityMenuActive.value === false) {
            priorityMenu.appendChild(buildPopUpMenu());
            // priorityMenu.setAttribute('style', 'position: absolute; width: 6rem;')

            priorityBtn.appendChild(priorityMenu);

            storageManagement.priorityMenuActive.value = true;

        } else {
            document.getElementById('priority-menu').remove();
            storageManagement.priorityMenuActive.value = false;
        }

        switch (e.target.id) {
            case 'normal-priority-btn':
                priorityBtn.textContent = 'Normal';
                priorityBtn.setAttribute('style', 'background-color: skyblue;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'high-priority-btn':
                priorityBtn.textContent = 'High';
                priorityBtn.setAttribute('style', 'background-color: yellow;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'urgent-priority-btn':
                priorityBtn.textContent = 'Urgent';
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
    let ls_DueDate = storageManagement.dateOfActiveRow.split('/');
    let reArragedDueDate = `${ls_DueDate[2]}-${ls_DueDate[0]}-${ls_DueDate[1]}`
    dueDateBtn.value = reArragedDueDate;

    prioDateWrapper.appendChild(priorityBtn);
    prioDateWrapper.appendChild(dueDateBtn);

    const exitBtn = document.createElement('button');
    exitBtn.id = 'exit-btn';
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


        if (titleInput.value === '') {
            titleInput.setAttribute('style', 'background-color: rgb(246,166,166, .1) ')
            titleInput.addEventListener('input', () => titleInput.setAttribute('style', 'background-color: none;'))
            return;

        } else

            if (storageManagement.editTaskMenuActive.value === true) {

                if (storageManagement.onProjectsPage.value === true) {
                    let projects = JSON.parse(localStorage.getItem('projects'));

                    targetedRow.querySelector('#row-title').textContent = titleInput.value;

                    let selectedProject = projects.find(obj => {
                        return obj.id === storageManagement.idOfActiveProject;
                    })
        

                    let matchingRow = selectedProject.tasks.find(obj => obj.id === targetedRow.id);

                    //new values that will be updated by the user changes
                    matchingRow.title = titleInput.value;
                    matchingRow.dueDate = dueDateValue(matchingRow, dueDateBtn.value);
                    matchingRow.priority = priorityChecker(matchingRow, priorityBtn.textContent); // not working for some reason


                    localStorage.setItem('projects', JSON.stringify(projects));

                    newTaskContainer.remove();
                    storageManagement.editTaskMenuActive.value = false;
                    updateProjectTasksLS();


                } else {
                    let row = JSON.parse(localStorage.getItem('rows'));

                    targetedRow.querySelector('#row-title').textContent = titleInput.value;

                    let matchingRow = row.find(obj => obj.id === targetedRow.id);

                    //new values that will be updated by the user changes
                    matchingRow.title = titleInput.value;
                    matchingRow.dueDate = dueDateValue(matchingRow, dueDateBtn.value);
                    matchingRow.priority = priorityChecker(matchingRow, priorityBtn.textContent); // not working for some reason


                    localStorage.setItem('rows', JSON.stringify(row));

                    newTaskContainer.remove();
                    storageManagement.editTaskMenuActive.value = false;
                    updateScreenTasksLS();
                    updateScreenProjectsLS();
                }
            }

    })

    bottomContainer.appendChild(editTaskBtn);

    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(bottomContainer)

    return newTaskContainer;
}

