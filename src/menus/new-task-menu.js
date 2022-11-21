import './new-task-menu.css';
import { rows, saveTodoToStorage, storageManagement } from '../local-storage';
import { todoListRows } from '../todo_row/todo';
import { isFirstDayOfMonth } from 'date-fns';
import { buildPopUpMenu } from './priority-popup-menu';


/*
todo list object template = {
    title: '',
    dueDate: '',
    description: '', this will not appear on the todo list div, but will need to be stored so that it can be shown on the expanded screen
    priorty: '', (defaults to normal is not chosen)
    status: '' , (defaults to incomplete, status will change once user clicks the check box)
}

when the user clicks the '+Add Task' button, it will take the title, priority(if none is selected, default to normal),
due date, description(optional), an put it in an object. Then It will place that object in the local storage.

then there will be a function ran that checks how many objects are stored. it will then place divs for each of these objects, while 
filling them in with the appropiate information. The amount of divs will be based on the amount of objects. 

each page module will have their own function that scans the date of each todo to allow the appropiate tasks to appear on the screen for that page

how everything will interact:
-a function checks the local to storage to see if there are objects already stored that can be shown on the screen
-user fills in information in the menu
-clicks 'add task' btn
-pulls information from container and place them into their own object
-object is stored in local storage
-another function that scans for local storage object is ran
-function creates a todo row, fills in the information, and append them to the page for each object
-function should not constantly create duplicate divs of already existing todos everytime a new tasks is created
-function needs to only add a todo row for the newest object created
-once the row is created and the user changes the status of the task, it will grab the desired object from the local storage, and change the status, and then set it back the local storage

**something I may keep in mind, what if i create an array of objects that represents all the rows**
        let rows = [
            obj = {
                title: 'Check email',
                dueDate: '2022-11-12',
                description: 'nigerian prince said i won $14,000,000',
                priorty: 'Urgent',
                status: 'complete',
            },
            obj = {
                title: 'Doctor appointment',
                dueDate: '2023-01-04',
                description: 'first check up in 10 years',
                priorty: 'High',
                status: 'incomplete',

            },
            obj = {
                title: 'Go to Christmas Party',
                dueDate: '2022-12-25',
                description: 'secret santa this year, dont forget gifts at home again',
                priorty: 'Normal',
                status: 'incomplete',

            },
            obj = {
                title: 'Black friday shopping',
                dueDate: '2022-11-25',
                description: 'get a ps5',
                priorty: 'Normal',
                status: 'incomplete',

            },
        ]
*/

export const buildNewTaskWindow = () => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.className = 'new-task-container';


    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';

    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';


    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';



    const titleInput = document.createElement('input');
    titleInput.id = 'title-input';
    titleInput.type = 'text';
    titleInput.textContent = 'USER ENTERED TITLE';

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

        /*
        create a newRow Var as an instance of the function call todoListRows(); this allows me to modify a single row at a time since
        I am only focused on one instance
        */
        if (dueDateBtn.value === '') {
            console.log('please enter a date');
            return;

        } else if (storageManagement.newTaskMenuActive.value === true) {
            let newRow = todoListRows();
            newRow.title.textContent = titleInput.value;
            dueDateValue(dueDateBtn.value)
            // console.log(dueDateBtn.value);

            priorityChecker(newRow, priorityBtn.textContent);

            document.body.querySelector('#todo-list-container').appendChild(newRow.row);

            newTaskContainer.remove();
            storageManagement.newTaskMenuActive.value = false;
        }




    })

    bottomContainer.appendChild(addTaskBtn);

    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(middleContainer)
    newTaskContainer.appendChild(bottomContainer)

    return newTaskContainer;
}

function priorityChecker(currentRow, priorityBtnTextContent) {

    switch (priorityBtnTextContent) {
        case 'PRIORITY':
            currentRow.priority.textContent = 'Normal';

            break;
        case 'NORMAL':
            currentRow.priority.textContent = 'Normal';

            break;
        case 'HIGH':
            currentRow.priority.textContent = 'High';

            break;
        case 'URGENT':
            currentRow.priority.textContent = 'Urgent';

            break;
    }
}

//if date chosen is before 'today', this will not be allowed, and the user will be asked to choose a different date
function dueDateValue(value) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();

    let formattedDate = `${year}-${month}-${day}`;



    if (value === formattedDate) {
        //todo will only been shown on the home and today page. no where else
        console.log("YOU'VE CHOSEN TODAY's DATE");

    }
    // else if (value === '') {
    //     console.log("THIS WILL DEFAULT THE DATE TO TODAY IF NO DATE IS CHOSEN");

    // }

}