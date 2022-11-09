import './style.css'
import { headerContent } from './header/header-content.js';
import { compactSidebarContent } from './sidebar/compact_sidebar/compact-sidebar-content.js';
import { sidebar } from './sidebar/compact_sidebar/sidebar';
import { homePage } from './pages/home';
import { todayPage } from './pages/today';
import { todoListRows } from './todo_row/todo';
import { upcomingPage } from './pages/upcoming';

export let sideBarIsExpanded = { value: false };
export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';
document.body.appendChild(contentContainer);

headerContent();
compactSidebarContent();
sidebar();

export const content = document.createElement('div');
content.id = 'content';
contentContainer.appendChild(content);

// homePage();
// document.querySelector('.todo-list-container').appendChild(todoListRows());
// document.querySelector('.todo-list-container').appendChild(todoListRows());

// todayPage();
// document.querySelector('.todo-list-container').appendChild(todoListRows());
// document.querySelector('.todo-list-container').appendChild(todoListRows());
// document.querySelector('.todo-list-container').appendChild(todoListRows());
// document.querySelector('.todo-list-container').appendChild(todoListRows());

upcomingPage();




