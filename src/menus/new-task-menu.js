import './new-task-menu.css';
import { localStorage } from '../local-storage';

export const buildNewTaskWindow = () => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.className = 'new-task-container';


    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';

    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';


    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';



    const titleInput = document.createElement('div');
    titleInput.id = 'title-input';
    titleInput.textContent = 'USER ENTERED TITLE';

    const priorityBtn = document.createElement('button');
    priorityBtn.id = 'priority-btn';
    priorityBtn.textContent = 'PRIORITY';

    const dueDateBtn = document.createElement('button');
    dueDateBtn.id = 'due-date-btn';
    dueDateBtn.textContent = 'DUE DATE';

    const exitBtn = document.createElement('button');
    exitBtn.id = 'exit-btn';
    exitBtn.textContent = 'X'
    exitBtn.addEventListener('click', () => {
        if (localStorage.newTaskMenuActive.value === true) {
            newTaskContainer.remove();
            localStorage.newTaskMenuActive.value = false;
        }
    })

    topContainer.appendChild(titleInput);
    topContainer.appendChild(priorityBtn);
    topContainer.appendChild(dueDateBtn);
    topContainer.appendChild(exitBtn);


    const descriptionTopText = document.createElement('p');
    descriptionTopText.id = 'description-text';
    descriptionTopText.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description-input';

    middleContainer.appendChild(descriptionTopText);
    middleContainer.appendChild(descriptionInput);


    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.textContent = '+ADD TASK';
    bottomContainer.appendChild(addTaskBtn);

    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(middleContainer)
    newTaskContainer.appendChild(bottomContainer)

    return newTaskContainer;
}

