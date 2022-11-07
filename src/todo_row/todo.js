/* 
build how the row of a the todo list will look like.

*/
import { content } from "..";

export const todoListRows = () => {
    const row = document.createElement('div');
    row.className = 'row';
    row.setAttribute('style', 'align-content: center; display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: white;border: grey 1px solid');
    row.addEventListener('resize', resizeRow(row))

    const status = document.createElement('div');
    status.id = 'row-status';
    status.textContent = 'O';
    status.setAttribute('style', `padding: 0 .5rem 0 .5rem; width: ${(document.getElementById('header-status').clientWidth) / 16}rem;`);
    status.addEventListener('resize', resizeRow(status));
    row.appendChild(status);

    const title = document.createElement('div');
    title.id = 'row-title';
    title.textContent = 'Do something very important';
    title.setAttribute('style', `padding: 0 .5rem 0 .5rem; width: ${(document.getElementById('header-title').clientWidth / 16)}rem;`);
    title.addEventListener('resize', resizeRow(title));

    row.appendChild(title);

    const priority = document.createElement('div');
    priority.id = 'row-priority';
    priority.textContent = 'Urgent';
    priority.setAttribute('style', `padding: 0 .5rem 0 .5rem; width: ${(document.getElementById('header-priority').clientWidth) / 16}rem;`);
    priority.addEventListener('resize', resizeRow(priority));


    row.appendChild(priority);

    const dueDate = document.createElement('div');
    dueDate.id = 'row-due-date';
    dueDate.textContent = '11/7/2022';
    dueDate.setAttribute('style', `padding: 0 .5rem 0 .5rem; display: flex; justify-content: space-between; width: ${(document.getElementById('header-due-date').clientWidth) / 16}rem;`);
    dueDate.addEventListener('resize', resizeRow(dueDate));

    row.appendChild(dueDate);

    const threeDots = document.createElement('img');
    threeDots.src = '../src/images/icons/three-dots.svg';

    dueDate.appendChild(threeDots);

    content.appendChild(row);
}

function resizeRow(element) {
    console.log('resizing!');

    switch (element) {

        case 'row':
            element.setAttribute('style', 'width: 100%;');

            break;

        case 'status':
            element.setAttribute('style', `width: ${(document.getElementById('header-status').clientWidth) / 16}rem`)

            break;

        case 'title':
            element.setAttribute('style', `width: ${(document.getElementById('header-title').clientWidth) / 16}rem`)

            break;

        case 'priority':
            element.setAttribute('style', `width: ${(document.getElementById('header-priority').clientWidth) / 16}rem`)

            break;

        case 'dueDate':
            element.setAttribute('style', `width: ${(document.getElementById('header-due-date').clientWidth) / 16}rem`)

            break;
    }


}