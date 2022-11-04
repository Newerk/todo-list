import './compact-sidebar.css'
import { expandSidebar } from '../expanded_sidebar/expand-sidebar';



//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page sidebar
 export const compactSidebarContent = () => {
        const compactSidebarContentDiv = document.createElement('div');
        compactSidebarContentDiv.className = 'compact-sidebar';
        document.body.appendChild(compactSidebarContentDiv);


        const expand = document.createElement('div');
        expand.id = 'expand-btn';
        expand.textContent = '>';
        expand.addEventListener('click', expandSidebar)
        compactSidebarContentDiv.appendChild(expand);
    

        const home = document.createElement('div');
        home.id = 'home-btn';
        home.textContent = 'HOME';
        compactSidebarContentDiv.appendChild(home);

        const today = document.createElement('div');
        today.id = 'today-btn';
        today.textContent = 'TODAY';
        compactSidebarContentDiv.appendChild(today);

        const upcoming = document.createElement('div');
        upcoming.id = 'upcoming-btn';
        upcoming.textContent = 'UPCOMING';
        compactSidebarContentDiv.appendChild(upcoming);

        const pastDue = document.createElement('div');
        pastDue.id = 'pastdue-btn';
        pastDue.textContent = 'PAST DUE';
        compactSidebarContentDiv.appendChild(pastDue);

        const projects = document.createElement('div');
        projects.id = 'projects-btn';
        projects.textContent = 'PROJECTS';
        compactSidebarContentDiv.appendChild(projects);

        const account = document.createElement('div');
        account.id = 'account-btn';
        account.textContent = 'ACCOUNT';
        compactSidebarContentDiv.appendChild(account);

        const settings = document.createElement('div');
        settings.id = 'settings-btn';
        settings.textContent = 'SETTINGS';
        compactSidebarContentDiv.appendChild(settings);
    
};
