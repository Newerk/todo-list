import './new-task-menu.css';
import { storageManagement } from '../local-storage';
import { buildPopUpMenu } from './priority-popup-menu';
import { todoFilterLogic } from '../todoFilterLogic';
import { updateInfo } from '../update-info';


export const editTaskWindow = () => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.className = 'new-task-container';


    const topContainer = document.createElement('div');
    topContainer.className = 'nt-top-container';

    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';


    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';


    const titleInput = document.createElement('input');
    titleInput.id = 'title-input';
    titleInput.type = 'text';
    titleInput.required = true;

    const prioDateWrapper = document.createElement('div');
    prioDateWrapper.id = 'priority-date-wrapper';

    const priorityBtn = document.createElement('button');
    priorityBtn.id = 'priority-btn';
    priorityBtn.textContent = 'PRIORITY';
    priorityBtn.addEventListener('click', (e) => {
        const priorityMenu = document.createElement('div');
        priorityMenu.id = 'priority-menu';


        if (storageManagement.priorityMenuActive.value === false) {
            priorityMenu.appendChild(buildPopUpMenu());
            priorityMenu.setAttribute('style', 'position: absolute; width: width: 6rem;')

            priorityBtn.appendChild(priorityMenu);

            storageManagement.priorityMenuActive.value = true;

        } else {
            document.getElementById('priority-menu').remove();
            storageManagement.priorityMenuActive.value = false;
        }

        switch (e.target.id) {
            case 'normal-priority-btn':
                priorityBtn.textContent = 'NORMAL';
                priorityBtn.setAttribute('style', 'background-color: skyblue;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'high-priority-btn':
                priorityBtn.textContent = 'HIGH';
                priorityBtn.setAttribute('style', 'background-color: yellow;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'urgent-priority-btn':
                priorityBtn.textContent = 'URGENT';
                priorityBtn.setAttribute('style', 'background-color: red;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

        }
    })

    const dueDateBtn = document.createElement('input');
    dueDateBtn.id = 'due-date-btn';
    dueDateBtn.type = 'date';
    dueDateBtn.textContent = 'DUE DATE';

    prioDateWrapper.appendChild(priorityBtn);
    prioDateWrapper.appendChild(dueDateBtn);

    const exitBtn = document.createElement('button');
    exitBtn.id = 'exit-btn';
    exitBtn.textContent = 'X'
    exitBtn.addEventListener('click', () => {
        if (storageManagement.editTaskMenuActive.value === true) {
            newTaskContainer.remove();
            storageManagement.editTaskMenuActive.value = false;
        }

    })

    topContainer.appendChild(titleInput);
    topContainer.appendChild(prioDateWrapper);
    topContainer.appendChild(exitBtn);


    const descriptionTopText = document.createElement('p');
    descriptionTopText.id = 'description-text';
    descriptionTopText.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description-input';

    middleContainer.appendChild(descriptionTopText);
    middleContainer.appendChild(descriptionInput);



    //right now this adds a new task instead of editing the selected task
    const editTaskBtn = document.createElement('button');
    editTaskBtn.id = 'add-task-btn';
    editTaskBtn.textContent = 'SAVE CHANGES';
    editTaskBtn.addEventListener('click', () => {
        let rows = JSON.parse(localStorage.getItem('rows'));
        const todoObj = {};
        let arr = [];

        let activeRowTitle = rows.forEach(obj => {
            if (obj.title === storageManagement.titleOfActiveRow) {
                console.log(obj.title)
                return obj.title;//the title of the current row that edit button was clicked on
            }
        })

        if (titleInput.value === '') {
            console.log('please enter a title');
            titleInput.setAttribute('style', 'background-color: rgb(246,166,166, .1) ')
            titleInput.addEventListener('input', () => titleInput.setAttribute('style', 'background-color: none;'))
            return;

        } else

            if (storageManagement.editTaskMenuActive.value === true) {
                todoObj.title = titleInput.value;
                todoObj.dueDate = dueDateValue(todoObj, dueDateBtn.value);
                todoObj.description = descriptionInput.value;
                todoObj.priority = priorityChecker(todoObj, priorityBtn.textContent);
                todoObj.status = 'Incomplete';

                todoFilterLogic(todoObj);


                newTaskContainer.remove();
                storageManagement.editTaskMenuActive.value = false;


                let rows = JSON.parse(localStorage.getItem('rows'));
                rows.push(todoObj);

                localStorage.setItem('rows', JSON.stringify(rows));

                console.log(JSON.parse(localStorage.getItem('rows')))

                updateInfo();


            }
    })

    bottomContainer.appendChild(editTaskBtn);

    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(bottomContainer)

    return newTaskContainer;
}

function priorityChecker(obj, priorityBtnTextContent) {

    switch (priorityBtnTextContent) {
        case 'PRIORITY':
            obj.priority = 'Normal';

            break;
        case 'NORMAL':
            obj.priority = 'Normal';

            break;
        case 'HIGH':
            obj.priority = 'High';

            break;
        case 'URGENT':
            obj.priority = 'Urgent';

            break;
    }

    return obj.priority;
}

//if date chosen is before 'today', this will not be allowed, and the user will be asked to choose a different date
function dueDateValue(obj, value) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();

    let formattedDate = `${year}-${month}-${day}`;


    if (value === formattedDate) {
        //todo will only been shown on the home and today page. no where else
        console.log("YOU'VE CHOSEN TODAY's DATE");
        obj.dueDate = `${month}/${day}/${year}`;

    } else if (value !== formattedDate && value !== '') {
        let arr = value.split('-');
        let reArrage = `${arr[1]}/${arr[2]}/${arr[0]}`
        obj.dueDate = reArrage;

    }

    //might remove this else bracket and instead use HTML Form verification and regex to not allow the user to pick a date before today.
    //will also consider adding requirements tag to the form element, title
    else {
        console.log("NO DATE CHOSEN, DEFAULTING TO TODAY'S DATE");
        obj.dueDate = `${month}/${day}/${year}`;
    }

    return obj.dueDate;
}
