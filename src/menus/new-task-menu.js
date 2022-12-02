import './new-task-menu.css';
import { storageManagement } from '../local-storage';
import { buildPopUpMenu } from './priority-popup-menu';
import { todoFilterLogic } from '../todoFilterLogic';
import { updateInfo } from '../update-info';


export const buildNewTaskWindow = () => {
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
        if (storageManagement.newTaskMenuActive.value === true) {
            newTaskContainer.remove();
            storageManagement.newTaskMenuActive.value = false;
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


    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.textContent = '+ADD TASK';
    addTaskBtn.addEventListener('click', () => {
        /*when this module becomes more fleshed out, it will take to account the filters that a todo will have. right now this button will just
        paste a todo onto the homepage*/
        const todoObj = {};

        if (titleInput.value === '') {
            console.log('please enter a title');
            titleInput.setAttribute('style', 'background-color: rgb(246,166,166, .1) ')
            titleInput.addEventListener('input', () => titleInput.setAttribute('style', 'background-color: none;'))
            return;
            
        }else

        if (storageManagement.newTaskMenuActive.value === true) {
            // let newRow = 
            todoObj.title = titleInput.value;
            todoObj.dueDate = dueDateValue(todoObj, dueDateBtn.value);
            todoObj.description = descriptionInput.value;
            todoObj.priority = priorityChecker(todoObj, priorityBtn.textContent);
            todoObj.status = 'Incomplete';

            // todoListRows(todoObj.title,todoObj.priority,todoObj.dueDate).build();


            /*
            run a function here that takes an object as an argument. This function
            will be full of if statements or switch/cases to check if
            the user entered date is before, after, or the same as today's date.
            This will determine which filter to add onto the object. now whenever 
            updateScreen() from the update-info module is ran, it will determine which
            todos to show depending on the page you are on

            todoFilterLogic(todoObj);
            */
            todoFilterLogic(todoObj);

            // document.body.querySelector('#todo-list-container').appendChild(newRow.row);

            newTaskContainer.remove();
            storageManagement.newTaskMenuActive.value = false;


            let rows = JSON.parse(localStorage.getItem('rows'));
            rows.push(todoObj);

            localStorage.setItem('rows', JSON.stringify(rows));
            
            console.log(JSON.parse(localStorage.getItem('rows')))

            updateInfo();


        }
    })

    bottomContainer.appendChild(addTaskBtn);

    newTaskContainer.appendChild(topContainer)
    // newTaskContainer.appendChild(middleContainer)
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
