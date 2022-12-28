/* 
build how the row of a the todo list will look like.

*/
import { storageManagement } from './local-storage';
import { closeThreeDotMenu, threeDotsMenu, menuStatus } from './menus/three-dots-menu';
import './todo_row/todo.css';


export const todoProjectRows = (ls_Title, ls_Priority, ls_DueDate, ls_Status, ls_ID) => {

    const row = document.createElement('div');
    row.className = 'row';
    row.id = ls_ID;
    row.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: white; border: grey 1px solid');

    const status = document.createElement('div');
    status.id = 'row-status';


    let statusCheckbox = document.createElement('input');
    statusCheckbox.type = 'checkbox';

    let getStatus = () => {
        return ls_Status === 'Complete';
    }

    statusCheckbox.checked = getStatus();


    statusCheckbox.addEventListener('change', (e) => {
        let lsProjects = JSON.parse(localStorage.getItem('projects'));

        let selectedProject = lsProjects.find(obj => {
            return obj.id === storageManagement.idOfActiveProject;
        })

        let selectedRow = selectedProject.tasks.find(obj => {
            return obj.id === e.target.parentElement.parentElement.id
        })

        if (e.target.checked) {

            console.log(`id of project: ${selectedRow.id}---need to find the id of the row inside the project instead`);
            console.log(`e.target row id: ${e.target.parentElement.parentElement.id}`)


            if (selectedRow.id === e.target.parentElement.parentElement.id) {
                selectedRow.status = 'Complete';

                e.target.parentElement.parentElement.querySelector('#row-title').style.setProperty('text-decoration', 'line-through');

                console.log(`selected project status updated`);

                return localStorage.setItem('projects', JSON.stringify(lsProjects))
            }


            console.log(JSON.parse(localStorage.getItem('projects')))



        } else {
            // let result = lsProjects.filter(obj => {
                if (selectedRow.title === e.target.parentElement.parentElement.querySelector('#row-title').textContent) {
                    selectedRow.status = 'Incomplete';

                    e.target.parentElement.parentElement.querySelector('#row-title').style.textDecoration = null;


                    return localStorage.setItem('projects', JSON.stringify(lsProjects))
                }

            // })

            console.log(JSON.parse(localStorage.getItem('projects')))
        }

    })

    status.appendChild(statusCheckbox)


    status.setAttribute('style', `display: flex; justify-content: center; width: 3rem;`);
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
    priority.setAttribute('style', ` width: 3rem;`);


    row.appendChild(priority);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.className = 'due-date-container';
    dueDateContainer.setAttribute('style', ` width: 3rem;`);


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


    return row;
}

