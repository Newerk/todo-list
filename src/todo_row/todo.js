/* 
build how the row of a the todo list will look like.

*/
import './todo.css';
import { content } from "..";

export const todoListRows = () => {
    const row = document.createElement('div');
    row.className = 'row';
    row.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 1fr; height: 2rem; background-color: white;border: grey 1px solid');

    const status = document.createElement('div');
    status.id = 'row-status';
    status.textContent = 'O';
    status.setAttribute('style', `display: flex; justify-content: center; width: ${(document.getElementById('header-status').offsetWidth)}px;`);
    row.appendChild(status);

    const title = document.createElement('div');
    title.id = 'row-title';
    title.textContent = 'Do something very important';
    title.setAttribute('style', ` width: 1fr; text-overflow: ellipsis;`);

    row.appendChild(title);

    const priority = document.createElement('div');
    priority.id = 'row-priority';
    priority.textContent = 'Urgent';
    priority.setAttribute('style', ` width: ${(document.getElementById('header-priority').offsetWidth)}px;`);


    row.appendChild(priority);

    const dueDate = document.createElement('div');
    dueDate.id = 'row-due-date';
    dueDate.textContent = '11/7/2022';
    dueDate.setAttribute('style', ` width: ${(document.getElementById('header-due-date').offsetWidth)}px;`);

    row.appendChild(dueDate);

    const threeDots = document.createElement('img');
    threeDots.src = '../src/images/icons/three-dots.svg';

    dueDate.appendChild(threeDots);

    content.appendChild(row);
}

