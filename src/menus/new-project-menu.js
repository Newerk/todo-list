import './new-task-menu.css';
import { storageManagement } from '../local-storage';
import { updateScreenProjectsLS } from '../update-info';


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
    topContainer.appendChild(exitBtn);


    const descriptionTopText = document.createElement('p');
    descriptionTopText.id = 'description-text';
    descriptionTopText.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description-input';
    descriptionInput.maxLength = '420';

    middleContainer.appendChild(descriptionTopText);
    middleContainer.appendChild(descriptionInput);


    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project-btn';
    addProjectBtn.textContent = '+ADD PROJECT';
    addProjectBtn.addEventListener('click', () => {
        const todoObj = {};
        const uniqueID = "id" + Math.random().toString(16).slice(2);


        if (titleInput.value === '') {
            console.log('please enter a title');
            titleInput.setAttribute('style', 'background-color: rgb(246,166,166, .1) ')
            titleInput.addEventListener('input', () => titleInput.setAttribute('style', 'background-color: none;'))
            return;

        } else

            if (storageManagement.newProjectMenuActive.value === true) {

                todoObj.title = titleInput.value;
                todoObj.description = descriptionInput.value;
                todoObj.id = uniqueID;
                todoObj.tasks = [];

                newProjectContainer.remove();
                storageManagement.newProjectMenuActive.value = false;


                let projects = JSON.parse(localStorage.getItem('projects'));
                projects.push(todoObj);

                localStorage.setItem('projects', JSON.stringify(projects));

                console.log(JSON.parse(localStorage.getItem('projects')))

                updateScreenProjectsLS();
            }
    })

    bottomContainer.appendChild(addProjectBtn);

    newProjectContainer.appendChild(topContainer)
    newProjectContainer.appendChild(middleContainer)
    newProjectContainer.appendChild(bottomContainer)

    return newProjectContainer;
}
