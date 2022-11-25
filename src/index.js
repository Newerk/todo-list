import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';
import { todoListRows } from './todo_row/todo';
// import { rows } from './local-storage';



export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';


export const content = document.createElement('div');
content.id = 'content';
content.appendChild(homePage());



headerContent();
compactSidebarContent();

document.body.appendChild(contentContainer);

contentContainer.appendChild(content);



document.querySelector('#header-logo').addEventListener('click', () => {

/*--------------------------------------------------------------------------------------------------------------*/
/*THIS IS SIMPLY A TEST EXAMPLE OF HOW I WILL FILTER THOUGH THE ROWS ARRAY TO SHOW THE CORRECT INFORMATION*/
/*THIS IS USELESS AND WILL NEED TO BE DELETED ONCE THE FILTERING IS IMPLEMENTED*/

    const todoObj = {};
    let newRow = todoListRows();
    todoObj.title = 'UNFILTERED';
    todoObj.dueDate = 'UNFILTERED';
    todoObj.description = 'UNFILTERED';
    todoObj.priority = 'UNFILTERED';
    todoObj.status = 'Incomplete';

    document.body.querySelector('#todo-list-container').appendChild(newRow.row);

    rows.push(todoObj);
    console.log(rows);

    const result = rows.filter(obj => {
        return obj.filter === 'home';

    })

    console.log(`LIST OF ROWS THAT WILL ONLY SHOW ON THE HOME PAGE:`);
    console.log(result);

})
/*--------------------------------------------------------------------------------------------------------------*/















