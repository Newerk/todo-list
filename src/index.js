import './style.css'
import { headerContent } from './header/header-content.js';
import { compactSidebarContent } from './sidebar/compact_sidebar/compact-sidebar-content.js';
import { sidebar } from './sidebar/hidden-sidebar';


export let sideBarIsExpanded = { value: false };
export const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

headerContent();
compactSidebarContent();
sidebar();
