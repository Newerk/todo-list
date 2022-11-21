import './three-dots-menu.css'

export const threeDotsMenu = () => {
    let menuIsOpen = {
        value: false,

        get getValue() {
            return this.value;
        },

        set setValue(boolean){
            this.value = boolean;

        },

        setOppositeValue: function(originalValue) {

            if (originalValue === false) {
                this.value = true;
                console.log(`menu is now set to ${this.value}`)

            } else {
                this.value = false;
                console.log(`menu is now set to ${this.value}`)

            }
        }
    };



    const container = document.createElement('div');
    container.className = 'td-container';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';
    editBtn.id = 'edit-td-btn';
    editBtn.addEventListener('click', closeDiv);

    const duplicateBtn = document.createElement('button');
    duplicateBtn.textContent = 'DUPLICATE';
    duplicateBtn.id = 'duplicate-td-btn';
    duplicateBtn.addEventListener('click', closeDiv);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.id = 'delete-td-btn';
    deleteBtn.addEventListener('click', closeDiv);

    container.appendChild(editBtn);
    container.appendChild(duplicateBtn);
    container.appendChild(deleteBtn);


    return {
        container,
        menuIsOpen
    };
}



function closeDiv() {
    // document.querySelector('.td-container').remove();
}