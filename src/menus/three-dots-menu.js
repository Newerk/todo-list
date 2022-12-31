import { storageManagement } from '../local-storage';
import { updateProjectTasksLS, updateScreenTasksLS } from '../update-info';
import { editTaskWindow } from './edit-task-menu';
import './three-dots-menu.css';

export let menuStatus = {
    value: false,

    get getValue() {
        return this.value;
    },

    set setValue(newValue) {
        this.value = newValue;
    }

};

export const threeDotsMenu = () => {
    const container = document.createElement('div');
    container.className = 'td-container';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';
    editBtn.id = 'edit-td-btn';
    editBtn.addEventListener('click', (e) => {
        const targetedRow = e.target.parentElement.parentElement.parentElement;

        storageManagement.titleOfActiveRow = targetedRow.querySelector('#row-title').textContent;
        storageManagement.priorityOfActiveRow = targetedRow.querySelector('#row-priority').textContent;
        storageManagement.idOfActiveRow = targetedRow.id;
        storageManagement.dateOfActiveRow = targetedRow.querySelector('#row-due-date').textContent;

        closeThreeDotMenu();

        if (storageManagement.editTaskMenuActive.value === false) {
            document.body.querySelector('.top-container').appendChild(editTaskWindow());
            storageManagement.editTaskMenuActive.value = true;
        } else {
            console.log('there is a window already opened')
        }


    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.id = 'delete-td-btn';
    deleteBtn.addEventListener('click', (e) => {


        if (storageManagement.onProjectsPage.value === true) {
            let projects = JSON.parse(localStorage.getItem('projects'));
            const targetedRow = e.target.parentElement.parentElement.parentElement;
            console.log('targeted row: ' + targetedRow.id)
            closeThreeDotMenu();

            //returns a new array of objs that DONT have the targeted id

            let selectedProject = projects.find(obj => {
                return obj.id === storageManagement.idOfActiveProject;
            })


            let rows = selectedProject.tasks;
            console.log('number of tasks in targeted Project: ' + rows.length);

            let selectedRowRemoved = rows.filter(obj => obj.id != targetedRow.id);
            selectedProject.tasks = rows = selectedRowRemoved;

            localStorage.setItem('projects', JSON.stringify(projects));
            updateProjectTasksLS();


        } else {

            let rows = JSON.parse(localStorage.getItem('rows'));
            const targetedRow = e.target.parentElement.parentElement.parentElement;
            closeThreeDotMenu();

            //returns a new array of objs that DONT have the targeted id
            let selectedRowRemoved = rows.filter(obj => obj.id != targetedRow.id);
            rows = selectedRowRemoved;

            localStorage.setItem('rows', JSON.stringify(rows));
            updateScreenTasksLS();
        }

    });

    container.append(editBtn, deleteBtn);

    return container;

}


export function closeThreeDotMenu() {
    document.querySelector('.positioner').remove();
    menuStatus.setValue = false;
}