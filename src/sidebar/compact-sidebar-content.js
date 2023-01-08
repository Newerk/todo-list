import './compact-sidebar.css'
import { expandSidebar } from './expanded_sidebar/expand-sidebar';
import { contentContainer } from '..';
import { fullSidebar } from './full-sidebar';
import { todayPage } from '../pages/today';
import { upcomingPage } from '../pages/upcoming';
import { pastDuePage } from '../pages/pastdue';
import { wipeContent } from '../wipe-content';
import { homePage } from '../pages/home';
import { storageManagement } from '../local-storage';
import { updateScreenProjectsLS, updateScreenTasksLS } from '../update-info';
import { activePageTracker } from '../active-page-tracker';
import { projectsPage } from '../pages/projects';
import { accountPage } from '../pages/account';
import { settingsPage } from '../pages/settings';


//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page sidebar
export const compactSidebarContent = () => {
        contentContainer.appendChild(fullSidebar());

        const compactSidebarContentDiv = document.createElement('div');
        compactSidebarContentDiv.className = 'compact-sidebar';
        document.body.appendChild(compactSidebarContentDiv);


        const expand = document.createElement('div');
        expand.id = 'expand-btn';
        // expand.textContent = '>';
        expand.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="7 7 12 12 7 17" />
        <polyline points="13 7 18 12 13 17" />
      </svg>`
        expand.addEventListener('click', function () {
                if (storageManagement.sideBarIsExpanded.value === true) {
                        // expand.textContent = '>';
                        expand.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="7 7 12 12 7 17" />
                        <polyline points="13 7 18 12 13 17" />
                      </svg>`
                
                        const container = document.querySelector('.expanded-container');
                        container.setAttribute('style', 'width: 0rem');
                        container.childNodes.forEach(el => el.setAttribute('style', 'width: 0rem; padding: 0rem; border: none; font-size: 0;'));
                        storageManagement.sideBarIsExpanded.value = false;

                } else {
                        expandSidebar();
                        // expand.textContent = '<';
                        expand.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="11 7 6 12 11 17" />
                        <polyline points="17 7 12 12 17 17" />
                      </svg>`
                }
        })
        compactSidebarContentDiv.appendChild(expand);


        const home = document.createElement('div');
        home.id = 'home-side-btn';
        // home.textContent = 'HOME';
        home.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <rect x="10" y="12" width="4" height="4" />
        </svg>`
        home.addEventListener('click', () => {
                wipeContent(homePage());
                activePageTracker(storageManagement.onHomePage)
                updateScreenTasksLS();


        });
        compactSidebarContentDiv.appendChild(home);

        const today = document.createElement('div');
        today.id = 'today-side-btn';
        // today.textContent = 'TODAY';
        today.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <line x1="16" y1="3" x2="16" y2="7" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="4" y1="11" x2="20" y2="11" />
        <line x1="11" y1="15" x2="12" y2="15" />
        <line x1="12" y1="15" x2="12" y2="18" />
      </svg>`
        today.addEventListener('click', () => {
                wipeContent(todayPage());
                activePageTracker(storageManagement.onTodayPage)
                updateScreenTasksLS();

        });
        compactSidebarContentDiv.appendChild(today);

        const upcoming = document.createElement('div');
        upcoming.id = 'upcoming-side-btn';
        // upcoming.textContent = 'UPCOMING';
        upcoming.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
        <circle cx="18" cy="18" r="4" />
        <path d="M15 3v4" />
        <path d="M7 3v4" />
        <path d="M3 11h16" />
        <path d="M18 16.496v1.504l1 1" />
      </svg>`
        upcoming.addEventListener('click', () => {
                wipeContent(upcomingPage());
                activePageTracker(storageManagement.onUpcomingPage)
                updateScreenTasksLS();

        });
        compactSidebarContentDiv.appendChild(upcoming);

        const pastDue = document.createElement('div');
        pastDue.id = 'pastdue-side-btn';
        // pastDue.textContent = 'PAST DUE';
        pastDue.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-off" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9" />
        <line x1="16" y1="3" x2="16" y2="7" />
        <line x1="8" y1="3" x2="8" y2="4" />
        <path d="M4 11h7m4 0h5" />
        <line x1="11" y1="15" x2="12" y2="15" />
        <line x1="12" y1="15" x2="12" y2="18" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>`
        pastDue.addEventListener('click', () => {
                wipeContent(pastDuePage());
                activePageTracker(storageManagement.onPastDuePage)
                updateScreenTasksLS();
        });
        compactSidebarContentDiv.appendChild(pastDue);

        const projects = document.createElement('div');
        projects.id = 'projects-side-btn';
        // projects.textContent = 'PROJECTS';
        projects.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folders" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
        <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
      </svg>`
        projects.addEventListener('click', () => {
                wipeContent(projectsPage());
                activePageTracker(storageManagement.onProjectsPage);
                updateScreenProjectsLS();
        });
        compactSidebarContentDiv.appendChild(projects);


        const account = document.createElement('div');
        account.id = 'account-side-btn';
        // account.textContent = 'ACCOUNT';
        account.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>`
        account.addEventListener('click', () => {
                wipeContent(accountPage());
        });
        compactSidebarContentDiv.appendChild(account);

        const settings = document.createElement('div');
        settings.id = 'settings-side-btn';
        // settings.textContent = 'SETTINGS';
        settings.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>`
        settings.addEventListener('click', () => {
                wipeContent(settingsPage());
        });
        compactSidebarContentDiv.appendChild(settings);



};
