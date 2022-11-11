import './compact-sidebar.css'
import { expandSidebar } from './expanded_sidebar/expand-sidebar';
import { contentContainer, sideBarIsExpanded } from '..';
import { fullSidebar } from './full-sidebar';
import { todayPage } from '../pages/today';
import { upcomingPage } from '../pages/upcoming';
import { pastDuePage } from '../pages/pastdue';
import { wipeContent } from '../wipe-content';
import { homePage } from '../pages/home';

//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page sidebar
export const compactSidebarContent = () => {
        // sidebar();
        contentContainer.appendChild(fullSidebar());

        const compactSidebarContentDiv = document.createElement('div');
        compactSidebarContentDiv.className = 'compact-sidebar';
        document.body.appendChild(compactSidebarContentDiv);


        const expand = document.createElement('div');
        expand.id = 'expand-btn';
        expand.textContent = '>';
        expand.addEventListener('click', function () {
                if (sideBarIsExpanded.value === true) {
                        expand.textContent = '<';
                        const container = document.querySelector('.expanded-container');
                        container.setAttribute('style', 'width: 0rem');
                        container.childNodes.forEach(el => el.setAttribute('style', 'width: 0rem; padding: 0rem; border: none; font-size: 0'));
                        sideBarIsExpanded.value = false;

                } else {
                        expandSidebar();
                        expand.textContent = '>';
                }
        })
        compactSidebarContentDiv.appendChild(expand);


        const home = document.createElement('div');
        home.id = 'home-btn';
        home.textContent = 'HOME';
        home.addEventListener('click', () => {
                wipeContent(homePage());
        });
        compactSidebarContentDiv.appendChild(home);

        const today = document.createElement('div');
        today.id = 'today-btn';
        today.textContent = 'TODAY';
        today.addEventListener('click', () => {
                wipeContent(todayPage());
        });
        compactSidebarContentDiv.appendChild(today);

        const upcoming = document.createElement('div');
        upcoming.id = 'upcoming-btn';
        upcoming.textContent = 'UPCOMING';
        upcoming.addEventListener('click', () => {
                wipeContent(upcomingPage());
        });
        compactSidebarContentDiv.appendChild(upcoming);

        const pastDue = document.createElement('div');
        pastDue.id = 'pastdue-btn';
        pastDue.textContent = 'PAST DUE';
        pastDue.addEventListener('click', () => {
                wipeContent(pastDuePage());
        });
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
