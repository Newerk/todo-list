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
    titleInput.autofocus = true;

    const prioDateWrapper = document.createElement('div');
    prioDateWrapper.id = 'priority-date-wrapper';

    const priorityBtn = document.createElement('button');
    priorityBtn.id = 'priority-btn';
    priorityBtn.textContent = 'Priority';
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
                priorityBtn.textContent = 'Normal';
                priorityBtn.setAttribute('style', 'background-color: skyblue;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'high-priority-btn':
                priorityBtn.textContent = 'High';
                priorityBtn.setAttribute('style', 'background-color: yellow;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

            case 'urgent-priority-btn':
                priorityBtn.textContent = 'Urgent';
                priorityBtn.setAttribute('style', 'background-color: red;');
                priorityMenu.hidden = true;
                storageManagement.priorityMenuActive.value = false;

                break;

        }
    })

    const dueDateBtn = document.createElement('input');
    dueDateBtn.id = 'due-date-btn';
    dueDateBtn.type = 'date';
    dueDateBtn.textContent = 'Due Date';

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

        } else

            if (storageManagement.newTaskMenuActive.value === true) {
                const uniqueID = "id" + Math.random().toString(16).slice(2);

                todoObj.title = titleInput.value;
                todoObj.dueDate = dueDateValue(todoObj, dueDateBtn.value);
                todoObj.priority = priorityChecker(todoObj, priorityBtn.textContent);
                todoObj.status = 'Incomplete';
                todoObj.id = uniqueID;

                todoFilterLogic(todoObj);

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
        case 'Priority':
            obj.priority = 'Normal';

            break;
        case 'Normal':
            obj.priority = 'Normal';

            break;
        case 'High':
            obj.priority = 'High';

            break;
        case 'Urgent':
            obj.priority = 'Urgent';

            break;

        default:
            obj.priority = 'Normal';
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

    // console.log('the day is ' + day);


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
        if (day < 10) {
            day = '0' + day.toString();
            console.log(day)
        }
        if (month < 10 ) {
            month = '0' + month.toString();
            console.log(month)

        }
        console.log("NO DATE CHOSEN, DEFAULTING TO TODAY'S DATE");
        obj.dueDate = `${month}/${day}/${year}`;
    }

    return obj.dueDate;
}
