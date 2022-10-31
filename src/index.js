import { headerContent } from './header/header-content.js';
import { compactSidebarContent } from './sidebar/compact_sidebar/compact-sidebar-content.js';
import './style.css'

import buildPopUpMenu from './new_task_window/priority-popup-menu.js';



export const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

headerContent();
compactSidebarContent();
buildPopUpMenu();


