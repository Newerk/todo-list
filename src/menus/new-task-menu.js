import './new-task-menu.css';
import { saveTodoToStorage, storageManagement } from '../local-storage';
import { todoListRows } from '../todo_row/todo';
import { isFirstDayOfMonth } from 'date-fns';


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



    const titleInput = document.createElement('div');
    titleInput.id = 'title-input';
    titleInput.textContent = 'USER ENTERED TITLE';

    const priorityBtn = document.createElement('button');
    priorityBtn.id = 'priority-btn';
    priorityBtn.textContent = 'PRIORITY';

    const dueDateBtn = document.createElement('button');
    dueDateBtn.id = 'due-date-btn';
    dueDateBtn.textContent = 'DUE DATE';

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
    topContainer.appendChild(priorityBtn);
    topContainer.appendChild(dueDateBtn);
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

        if (storageManagement.newTaskMenuActive.value === true) {
            document.body.querySelector('#todo-list-container').appendChild(todoListRows());
            newTaskContainer.remove();
            storageManagement.newTaskMenuActive.value = false;
        }

        console.log(localStorage);


    })

    bottomContainer.appendChild(addTaskBtn);

    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(middleContainer)
    newTaskContainer.appendChild(bottomContainer)

    return newTaskContainer;
}

