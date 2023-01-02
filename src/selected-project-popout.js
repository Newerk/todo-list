import { storageManagement } from './local-storage';
import './project-popout-style.css'
import { updateScreenProjectsLS } from './update-info';
import { newTaskBtn } from './pages/new-task-btn';

export const projectPopOut = () => {
    storageManagement.projectPopOutActive.value = true;


    const container = document.createElement('div');
    container.className = 'project-popout-container';

    const top = document.createElement('div');
    top.className = 'top';
    const title = document.createElement('div');
    title.className = 'popout-title';
    title.textContent = storageManagement.titleOfActiveProject;
    const exitBtn = document.createElement('button');
    exitBtn.className = 'popout-exit-btn';
    exitBtn.textContent = 'X';
    exitBtn.addEventListener('click', () => {
        document.querySelector('.project-popout-container').remove();
        storageManagement.projectPopOutActive.value = false;
    })

    top.append(title, exitBtn);

    const middle = document.createElement('div');
    middle.className = 'middle';
    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.className = 'description-wrapper';
    const descriptionTag = document.createElement('div');
    descriptionTag.textContent = 'Description:';
    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = storageManagement.descriptionOfActiveProject;

    descriptionWrapper.append(descriptionTag, description);

    const tasksWrapper = document.createElement('div');
    tasksWrapper.className = 'project-tasks-wrapper';
    const taskHeader = document.createElement('div');
    taskHeader.id = 'project-tasks-header';
    taskHeader.className = 'project-task-header';//added a class to allow the 3dotsmenu to appear
    const taskTag = document.createElement('div');
    taskTag.textContent = 'Tasks';
    const newTask = document.createElement('div');
    newTask.appendChild(newTaskBtn('#project-tasks-header'));

    const rowHeaderWrapper = document.createElement('div');
    rowHeaderWrapper.id = 'row-header';
    const rowStatus = document.createElement('div');
    rowStatus.textContent = 'Status';
    const rowTitle = document.createElement('div');
    rowTitle.textContent = 'Title';
    const rowPriority = document.createElement('div');
    rowPriority.textContent = 'Priority';
    const rowDate = document.createElement('div');
    rowDate.textContent = 'Due Date';
    rowHeaderWrapper.append(rowStatus,rowTitle,rowPriority,rowDate)

    taskHeader.append(taskTag,newTask)


    const taskContainer = document.createElement('div');
    taskContainer.id = 'project-tasks-container';

    tasksWrapper.append(taskHeader, rowHeaderWrapper,taskContainer)
    middle.append(descriptionWrapper, tasksWrapper);

    const bottom = document.createElement('div');
    bottom.className = 'bottom';
    const editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';
    editBtn.addEventListener('click', () => {
        editBtn.textContent = 'SAVE CHANGES';
        makeInput(title);
        makeInput(description);

        editBtn.addEventListener('click', () => {
            editBtn.textContent = 'EDIT';

            storageManagement.titleOfActiveProject = title.textContent;
            storageManagement.descriptionOfActiveProject = description.textContent;

            //get the project based on the ID and update the local storage
            let projects = JSON.parse(localStorage.getItem('projects'));

            let selectedProject = projects.find(obj => {
                return obj.id === storageManagement.idOfActiveProject;
            })

            selectedProject.title = storageManagement.titleOfActiveProject.trim();
            selectedProject.description = storageManagement.descriptionOfActiveProject.trim();

            console.log('title of active project updated to: ' + selectedProject.title)
            console.log('description of active project updated to: ' + selectedProject.description)

            localStorage.setItem('projects', JSON.stringify(projects));
            updateScreenProjectsLS();

        })

    })


    bottom.append(editBtn);

    container.append(top, middle, bottom);



    return container;
}

//update this function so that when the divs are editable, the background visisbily changes. also need to add a maxlength of 420
function makeInput(element) {
    element.innerHTML = '<div contenteditable="true" style="width:100%; min-width: 5rem;min-height: 1.5rem;"> <p>' + element.textContent + '</p></div>';

}
