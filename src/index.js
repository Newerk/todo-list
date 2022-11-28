import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';
import { todoListRows } from './todo_row/todo';
import { updateInfo } from './update-info';
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
    // if (document.querySelector(selectors)) {
        
    // }
    updateInfo();
})
