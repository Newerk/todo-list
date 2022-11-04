import { content } from "../..";
import '../../tables/tables-style.css'

export const threeDotsMenu = () => {
    const container = document.createElement('div');
    container.className = 'container';

    const renameBtn = document.createElement('button');
    renameBtn.textContent = 'RENAME';
    renameBtn.id = 'rename-td-btn';

    const duplicateBtn = document.createElement('button');
    duplicateBtn.textContent = 'DUPLICATE';
    duplicateBtn.id = 'duplicate-td-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.id = 'delete-td-btn';

    container.appendChild(renameBtn);
    container.appendChild(duplicateBtn);
    container.appendChild(deleteBtn);


    content.appendChild(container)
}