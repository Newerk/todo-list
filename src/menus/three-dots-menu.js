import { storageManagement } from '../local-storage';
import { editTaskWindow } from './edit-task-menu';
import './three-dots-menu.css'

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

    const duplicateBtn = document.createElement('button');
    duplicateBtn.textContent = 'DUPLICATE';
    duplicateBtn.id = 'duplicate-td-btn';
    duplicateBtn.addEventListener('click', () => {
        closeThreeDotMenu();
    });


    let t = [];

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.id = 'delete-td-btn';
    deleteBtn.addEventListener('click', (e) => {
        let rows = JSON.parse(localStorage.getItem('rows'));
        const targetedRow = e.target.parentElement.parentElement.parentElement;


        //object that needs to be removed from array
        let remove = rows.filter(obj => obj.id === targetedRow.id);
        console.log(`obj that needs to be removed: ${JSON.stringify(remove)}`)

        // document.getElementById(storageManagement.idOfActiveRow).remove()

        closeThreeDotMenu();
    });

    container.append(editBtn, deleteBtn);

    return container;

}


export function closeThreeDotMenu() {
    document.querySelector('.positioner').remove();
    menuStatus.setValue = false;
}