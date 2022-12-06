/* 
build how the row of a the todo list will look like.

*/
import { storageManagement } from '../local-storage';
import { closeThreeDotMenu, threeDotsMenu, menuStatus } from '../menus/three-dots-menu';
import './todo.css';


export const todoListRows = (ls_Title, ls_Priority, ls_DueDate, ls_Status, ls_ID) => {

    const row = document.createElement('div');
    row.className = 'row';
    row.id = ls_ID;
    row.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: white;border: grey 1px solid');

    const status = document.createElement('div');
    status.id = 'row-status';


    let statusCheckbox = document.createElement('input');
    statusCheckbox.type = 'checkbox';

    let getStatus = () => {
        if (ls_Status === 'Complete') {
            return true;
        } else {
            return false;
        }
    }

    statusCheckbox.checked = getStatus();


    statusCheckbox.addEventListener('change', (e) => {
        let lsRows = JSON.parse(localStorage.getItem('rows'));


        if (e.target.checked) {

            let result = lsRows.filter(obj => {
                if (obj.title === e.target.parentElement.parentElement.querySelector('#row-title').textContent) {
                    obj.status = 'Complete';

                    e.target.parentElement.parentElement.querySelector('#row-title').style.setProperty('text-decoration', 'line-through');

                    return localStorage.setItem('rows', JSON.stringify(lsRows))
                }

            })

            console.log(JSON.parse(localStorage.getItem('rows')))



        } else {
            let result = lsRows.filter(obj => {
                if (obj.title === e.target.parentElement.parentElement.querySelector('#row-title').textContent) {
                    obj.status = 'Incomplete';

                    e.target.parentElement.parentElement.querySelector('#row-title').style.textDecoration = null;


                    return localStorage.setItem('rows', JSON.stringify(lsRows))
                }

            })

            console.log(JSON.parse(localStorage.getItem('rows')))
        }

    })

    status.appendChild(statusCheckbox)


    status.setAttribute('style', `display: flex; justify-content: center; width: ${(document.getElementById('header-status').offsetWidth)}px;`);
    row.appendChild(status);

    const title = document.createElement('div');
    title.id = 'row-title';
    title.textContent = ls_Title;
    title.setAttribute('style', ` width: 1fr; text-overflow: ellipsis;`);

    if (ls_Status === 'Complete') {
        title.setAttribute('style', `text-decoration: line-through`);

    }

    row.appendChild(title);

    const priority = document.createElement('div');
    priority.id = 'row-priority';
    priority.textContent = ls_Priority;
    priority.setAttribute('style', ` width: ${(document.getElementById('header-priority').offsetWidth)}px;`);


    row.appendChild(priority);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.className = 'due-date-container';
    dueDateContainer.setAttribute('style', ` width: ${(document.getElementById('header-due-date').offsetWidth)}px;`);


    const dueDate = document.createElement('div');
    dueDate.id = 'row-due-date';
    dueDate.textContent = ls_DueDate;

    const threeDots = document.createElement('img');
    threeDots.src = '../src/images/icons/three-dots.svg';
    threeDots.className = 'three-dots';

    //edit this event so that if the three dots button is pressed again, it will remove the div**if this is still here, it wasnt done yet
    threeDots.addEventListener('click', () => {
        let menu = menuStatus.getValue;

        if (menu === false) {
            const positioner = document.createElement('div');
            positioner.className = 'positioner';
            positioner.setAttribute('style', 'display: flex; justify-content: end; position: relative; z-index: 1; top: .3rem; left: .05rem; grid-column: 4')
            positioner.appendChild(threeDotsMenu());
            row.appendChild(positioner);
            menuStatus.setValue = true;

        } else if (menu === true) {
            closeThreeDotMenu();
        }
    });

    dueDateContainer.appendChild(dueDate)
    dueDateContainer.appendChild(threeDots);


    row.appendChild(dueDateContainer);

    const build = () => {
        document.body.querySelector('#todo-list-container').appendChild(row);

    }


    return { build };
}

