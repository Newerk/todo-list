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
    deleteBtn.addEventListener('click', () => {
        // 1) get the correct index in the rows localstorage, remove it from the local storage
        let rows = JSON.parse(localStorage.getItem('rows'));
        //perhaps I can trace which index to delete based on the parent dom of this three dots menu
        console.log(rows[5].title) //Should says 'DELETE'. I want to figure out how i can delete this. I also have to keep inmind about duplicate tasks. I dont want one button press to remove all duplicate todos, only the todo that the open menu is applied to

        // 2) delete the node from the HTML

        // 3) close the menu
        closeThreeDotMenu();
    });

    container.append(editBtn, deleteBtn);

    return container;

}


export function closeThreeDotMenu() {
    document.querySelector('.positioner').remove();
    menuStatus.setValue = false;
}