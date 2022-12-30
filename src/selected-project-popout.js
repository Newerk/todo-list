import { storageManagement } from './local-storage';
import './project-popout-style.css'
import { updateProjectTasksLS, updateScreenProjectsLS } from './update-info';
import { newTaskBtn } from './pages/new-task-btn';

export const projectPopOut = () => {
    // const projects = JSON.parse(localStorage.getItem("projects"));
        storageManagement.projectPopOutActive.value = true;


        const container = document.createElement('div');
        container.className = 'project-popout-container';
        container.setAttribute('style', 'position: absolute; width: 60vw; background-color: orange; z-index: 5; place-self: center; display: grid; grid-template-rows: auto 1fr auto')

        const top = document.createElement('div');
        top.setAttribute('style', 'display: flex; justify-content: space-between; border: 1px solid black;');
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
        middle.setAttribute('style', 'border: 1px solid black; background-color: cyan; display: grid; grid-template-rows: auto 1fr;');
        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.setAttribute('style', 'border: 1px solid black;')
        const descriptionTag = document.createElement('div');
        descriptionTag.textContent = 'Description:';
        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = storageManagement.descriptionOfActiveProject;
        description.setAttribute('style', ` -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;`);

        descriptionWrapper.append(descriptionTag, description);

        const tasksWrapper = document.createElement('div');
        tasksWrapper.className = 'project-tasks-wrapper';
        tasksWrapper.setAttribute('style', 'display: grid; grid-template-rows: auto 1fr; border: 3px dotted red; height: calc(100vh - 25.3rem);');
        const taskHeader = document.createElement('div');
        taskHeader.id = 'project-tasks-header';
        taskHeader.className = 'top-container';//added a class to allow the 3dotsmenu to appear
        taskHeader.setAttribute('style', 'border: 1px solid black; display: flex; justify-content: space-between');
        const taskTag = document.createElement('div');
        taskTag.textContent = 'Tasks';
        const newTask = document.createElement('div');
        newTask.appendChild(newTaskBtn('#project-tasks-header'));
        // newTask.textContent = 'NEW TASK';

        taskHeader.append(taskTag, newTask)


        const taskContainer = document.createElement('div');
        taskContainer.id = 'project-tasks-container';
        taskContainer.setAttribute('style', 'border: 1px solid black; background-color: white; overflow-y: scroll;');

        tasksWrapper.append(taskHeader, taskContainer)
        middle.append(descriptionWrapper, tasksWrapper);

        const bottom = document.createElement('div');
        bottom.setAttribute('style', 'height: auto; width: 100%; border: 1px solid black; display: flex; justify-content: flex-end;');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'EDIT';
        editBtn.addEventListener('click', () => {
            editBtn.textContent = 'SAVE CHANGES';
            makeInput(title);
            makeInput(description);

            editBtn.addEventListener('click', ()=> {
                editBtn.textContent = 'EDIT';

                storageManagement.titleOfActiveProject = title.textContent;
                storageManagement.descriptionOfActiveProject = description.textContent;

                //get the project based on the ID and update the local storage
                let projects = JSON.parse(localStorage.getItem('projects'));

                let selectedProject = projects.find(obj => {
                    return obj.id === storageManagement.idOfActiveProject;
                })

                selectedProject.title = storageManagement.titleOfActiveProject;
                selectedProject.description = storageManagement.descriptionOfActiveProject;

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
        element.innerHTML = '<div contenteditable="true" style="width:100%; min-width: 5rem;"> <p>'+element.innerText+'</p></div>';

 }
