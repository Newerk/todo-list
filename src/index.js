import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';
import { updateInfo } from './update-info';
import { activePageTracker } from './active-page-tracker';
import { storageManagement } from './local-storage';



export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';


export const content = document.createElement('div');
content.id = 'content';
content.appendChild(homePage());



headerContent();
compactSidebarContent();

document.body.appendChild(contentContainer);

contentContainer.appendChild(content);

activePageTracker(storageManagement.onHomePage);
updateInfo();
