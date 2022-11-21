/* 
build how the row of a the todo list will look like.

*/
import { threeDotsMenu } from '../menus/three-dots-menu';
import './todo.css';


export const todoListRows = () => {
    const row = document.createElement('div');
    row.id = 'row';
    row.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: white;border: grey 1px solid');

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
    // priority.textContent = 'Urgent';
    priority.setAttribute('style', ` width: ${(document.getElementById('header-priority').offsetWidth)}px;`);


    row.appendChild(priority);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.className = 'due-date-container';
    dueDateContainer.setAttribute('style', ` width: ${(document.getElementById('header-due-date').offsetWidth)}px;`);


    const dueDate = document.createElement('div');
    dueDate.id = 'row-due-date';

    const threeDots = document.createElement('img');
    threeDots.src = '../src/images/icons/three-dots.svg';
    threeDots.className = 'three-dots';

    dueDateContainer.appendChild(dueDate)
    dueDateContainer.appendChild(threeDots);


    row.appendChild(dueDateContainer);


    let menuStatus = threeDotsMenu().menuIsOpen.value;


    //edit this event so that if the three dots button is pressed again, it will remove the div**if this is still here, it wasnt done yet
    threeDots.addEventListener('click', () => {

        if (menuStatus === false) {
            const positioner = document.createElement('div');
            positioner.className = 'positioner';
            positioner.setAttribute('style', 'display: flex; justify-content: end; position: relative; z-index: 1; top: .3rem; left: .05rem; grid-column: 4')
            positioner.appendChild(threeDotsMenu().container);
            row.appendChild(positioner);
            menuStatus = true;
        } else {
            document.querySelector('.positioner').remove();
            menuStatus = false;

        }

    })

    return { row, title, priority, dueDate };
}

