import { sidebarIsExpended, content } from "../compact_sidebar/compact-sidebar-content.js";


export const expandSidebar = () => {

    content.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr');

    if (sidebarIsExpended === false) {
        const expandedMenu = document.createElement('div');
        expandedMenu.id = 'expanded-menu';
    
        expandedMenu.setAttribute('style',
            `grid-column: 1;
            background-color: #252526; 
            width: 10rem;`);
    
        content.appendChild(expandedMenu);
        console.log('sidebar expanded');
        sidebarIsExpended = true;

    }


};