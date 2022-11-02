import { headerContent } from './header/header-content.js';
import { compactSidebarContent } from './sidebar/compact_sidebar/compact-sidebar-content.js';
import './style.css'

import { expandSidebar } from './sidebar/expanded_sidebar/expand-sidebar.js';



export const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

headerContent();
compactSidebarContent();
expandSidebar();
