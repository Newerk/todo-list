import './new-task-menu.css';
import { storageManagement } from '../local-storage';
import { buildPopUpMenu } from './priority-popup-menu';
import { updateInfo } from '../update-info';
import { dueDateValue, priorityChecker } from './new-task-menu';


export const buildNewProjectWindow = () => {
    const newProjectContainer = document.createElement('div');
    newProjectContainer.className = 'new-project-container';


    const topContainer = document.createElement('div');
    topContainer.className = 'np-top-container';

    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';


    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';



    const titleInput = document.createElement('input');
    titleInput.id = 'title-input';
    titleInput.type = 'text';
    titleInput.textContent = 'USER ENTERED TITLE';

    const prioDateWrapper = document.createElement('div');
    prioDateWrapper.id = 'priority-date-wrapper';

    const priorityBtn = document.createElement('button');
    priorityBtn.id = 'priority-btn';
    priorityBtn.textContent = 'PRIORITY';
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
        if (storageManagement.newProjectMenuActive.value === true) {
            newProjectContainer.remove();
            storageManagement.newProjectMenuActive.value = false;
        }

    })

    topContainer.appendChild(titleInput);
    // topContainer.appendChild(prioDateWrapper);
    topContainer.appendChild(exitBtn);


    const descriptionTopText = document.createElement('p');
    descriptionTopText.id = 'description-text';
    descriptionTopText.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description-input';

    middleContainer.appendChild(descriptionTopText);
    middleContainer.appendChild(descriptionInput);


    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project-btn';
    addProjectBtn.textContent = '+ADD PROJECT';
    addProjectBtn.addEventListener('click', () => {
        /*when this module becomes more fleshed out, it will take to account the filters that a todo will have. right now this button will just
        paste a todo onto the homepage*/
        const todoObj = {};

        if (storageManagement.newProjectMenuActive.value === true) {
            // let newRow = 
            todoObj.title = titleInput.value;
            todoObj.dueDate = dueDateValue(todoObj, dueDateBtn.value);
            todoObj.description = descriptionInput.value;
            todoObj.priority = priorityChecker(todoObj, priorityBtn.textContent);
            todoObj.status = 'Incomplete';


            // todoFilterLogic(todoObj);


            newProjectContainer.remove();
            storageManagement.newProjectMenuActive.value = false;


            let rows = JSON.parse(localStorage.getItem('rows'));
            rows.push(todoObj);

            localStorage.setItem('rows', JSON.stringify(rows));
            
            console.log(JSON.parse(localStorage.getItem('rows')))

            updateInfo();


        }
    })

    bottomContainer.appendChild(addProjectBtn);

    newProjectContainer.appendChild(topContainer)
    newProjectContainer.appendChild(middleContainer)
    newProjectContainer.appendChild(bottomContainer)

    return newProjectContainer;
}
