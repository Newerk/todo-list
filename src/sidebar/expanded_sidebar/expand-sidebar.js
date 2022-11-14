import '../expanded_sidebar/expanded-sidebar.css'
import { localStorage } from '../../local-storage';
import { expandedSidebarLogic } from "./expanded-sidebar-logic";


export const expandSidebar = () => {
    if (localStorage.sideBarIsExpanded.value === false && window.innerWidth >= 850) {
        expandedSidebarLogic();
        localStorage.sideBarIsExpanded.value = true;

        const container = document.querySelector('.expanded-container');
        container.setAttribute('style', 'width: 15rem');
        container.childNodes.forEach(el => el.setAttribute('style', 'width: 15rem'));
    }
}