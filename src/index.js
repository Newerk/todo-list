import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';
import { rows, storageManagement } from './local-storage';

export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';


export const content = document.createElement('div');
content.id = 'content';
content.appendChild(homePage());



headerContent();
compactSidebarContent();

document.body.appendChild(contentContainer);

contentContainer.appendChild(content);

//using  an if statment to check if a localstorage key is existing allows you to keep values after referesh. Other wise it will always reset the localstorage and remake every key to its default values
if (!localStorage.getItem('count')) {
    localStorage.setItem('count', 0)
}

export let getCount = () => {
    let count = JSON.parse(localStorage.getItem('count'));
    return count;
};













