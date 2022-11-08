import { content } from "../..";
import '../../tables/tables-style.css'

export const threeDotsMenu = () => {
    const container = document.createElement('div');
    container.className = 'container';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';
    editBtn.id = 'edit-td-btn';

    const duplicateBtn = document.createElement('button');
    duplicateBtn.textContent = 'DUPLICATE';
    duplicateBtn.id = 'duplicate-td-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.id = 'delete-td-btn';

    container.appendChild(editBtn);
    container.appendChild(duplicateBtn);
    container.appendChild(deleteBtn);


    return container;
}