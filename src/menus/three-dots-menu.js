import './three-dots-menu.css'

export  let menuStatus = {
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
    editBtn.addEventListener('click', () => {
        closeThreeDotMenu();
    });

    const duplicateBtn = document.createElement('button');
    duplicateBtn.textContent = 'DUPLICATE';
    duplicateBtn.id = 'duplicate-td-btn';
    duplicateBtn.addEventListener('click', () => {
        closeThreeDotMenu();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.id = 'delete-td-btn';
    deleteBtn.addEventListener('click', () => {
        closeThreeDotMenu();
    });

    container.appendChild(editBtn);
    container.appendChild(duplicateBtn);
    container.appendChild(deleteBtn);


    return container;

}


export function closeThreeDotMenu() {
        document.querySelector('.positioner').remove();
        menuStatus.setValue = false;
}