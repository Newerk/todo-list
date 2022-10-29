import { sidebarIsExpended, content } from "../compact_sidebar/compact-sidebar-content.js";


export const retractExpandedSidebar = () => {
    const expandedSidebarDiv = document.querySelector('.expanded-sidebar');

    const expandBtn = document.querySelector('#expand-btn');

    expandBtn.addEventListener('click', function () {

        content.setAttribute('style', 'display: grid; grid-template-columns: 1fr');

        expandedSidebarDiv.setAttribute('style', 'background-color: red;')
        sidebarIsExpended = false;

        console.log('sidebar retracted');
    })
};