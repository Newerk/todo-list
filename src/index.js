import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';

//using  an if statment to check if a localstorage key is existing allows you to keep values after referesh. Other wise it will always reset the localstorage and remake every key to its default values
(() => {
    if (!localStorage.getItem('todo_list')) {
        localStorage.setItem('todo_list', '[]')
    }
    if (!localStorage.getItem('current_theme')) {
        localStorage.setItem('current_theme', 'light')
    }
})();

export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';


export const content = document.createElement('div');
content.id = 'content';
content.appendChild(homePage());



headerContent();
compactSidebarContent();

document.body.appendChild(contentContainer);

contentContainer.appendChild(content);
















