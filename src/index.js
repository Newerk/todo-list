import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';
import { todoListRows } from './todo_row/todo';

export let sideBarIsExpanded = { value: false };

export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';


export const content = document.createElement('div');
content.id = 'content';
content.appendChild(homePage());



headerContent();
compactSidebarContent();

document.body.appendChild(contentContainer);

contentContainer.appendChild(content);

document.body.querySelector('.todo-list-container').appendChild(todoListRows());
document.body.querySelector('.todo-list-container').appendChild(todoListRows());
document.body.querySelector('.todo-list-container').appendChild(todoListRows());
document.body.querySelector('.todo-list-container').appendChild(todoListRows());







