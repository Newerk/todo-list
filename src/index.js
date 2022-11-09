import './style.css'
import { headerContent } from './header/header-content.js';
import { compactSidebarContent } from './sidebar/compact_sidebar/compact-sidebar-content.js';
import { homePage } from './pages/home';

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






