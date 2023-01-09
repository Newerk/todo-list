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
import { changeBtnBg } from './sidebar-active-page-colors';


//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page sidebar
export const compactSidebarContent = () => {
        contentContainer.appendChild(fullSidebar());

        const compactSidebarContentDiv = document.createElement('div');
        compactSidebarContentDiv.className = 'compact-sidebar';
        document.body.appendChild(compactSidebarContentDiv);


        const expand = document.createElement('img');
        expand.id = 'expand-btn';
        // expand.textContent = '>';
        expand.src = '../src/images/icons/expand-sidebar.svg';    
        expand.addEventListener('click', function () {
                changeBtnBg();

                if (storageManagement.sideBarIsExpanded.value === true) {
                        expand.src = '../src/images/icons/expand-sidebar.svg'    ;    

                        const container = document.querySelector('.expanded-container');
                        container.setAttribute('style', 'width: 0rem');
                        container.childNodes.forEach(el => el.setAttribute('style', 'width: 0rem; padding: 0rem; border: none; font-size: 0;'));
                        storageManagement.sideBarIsExpanded.value = false;

                } else {
                        expandSidebar();
                        changeBtnBg();
                        expand.src = '../src/images/icons/collapse-sidebar.svg';    

                }
        })
        compactSidebarContentDiv.appendChild(expand);


        const home = document.createElement('img');
        home.id = 'home-side-btn';
        home.src = '../src/images/icons/home.svg'
        home.addEventListener('click', () => {
                wipeContent(homePage());
                activePageTracker(storageManagement.onHomePage)
                updateScreenTasksLS();
                changeBtnBg();


        });
        compactSidebarContentDiv.appendChild(home);

        const today = document.createElement('img');
        today.id = 'today-side-btn';
        today.src = '../src/images/icons/today.svg'
        // today.textContent = 'TODAY';
        today.addEventListener('click', () => {
                wipeContent(todayPage());
                activePageTracker(storageManagement.onTodayPage)
                updateScreenTasksLS();
                changeBtnBg();

        });
        compactSidebarContentDiv.appendChild(today);

        const upcoming = document.createElement('img');
        upcoming.id = 'upcoming-side-btn';
        upcoming.src = '../src/images/icons/upcoming.svg'
        // upcoming.textContent = 'UPCOMING';
        upcoming.addEventListener('click', () => {
                wipeContent(upcomingPage());
                activePageTracker(storageManagement.onUpcomingPage)
                updateScreenTasksLS();
                changeBtnBg();

        });
        compactSidebarContentDiv.appendChild(upcoming);

        const pastDue = document.createElement('img');
        pastDue.id = 'pastdue-side-btn';
        pastDue.src = '../src/images/icons/pastdue.svg'
        // pastDue.textContent = 'PAST DUE';
        pastDue.addEventListener('click', () => {
                wipeContent(pastDuePage());
                activePageTracker(storageManagement.onPastDuePage)
                updateScreenTasksLS();
                changeBtnBg();

        });
        compactSidebarContentDiv.appendChild(pastDue);

        const projects = document.createElement('img');
        projects.id = 'projects-side-btn';
        projects.src = '../src/images/icons/projects.svg'
        // projects.textContent = 'PROJECTS';
        projects.addEventListener('click', () => {
                wipeContent(projectsPage());
                activePageTracker(storageManagement.onProjectsPage);
                updateScreenProjectsLS();
                changeBtnBg();

        });
        compactSidebarContentDiv.appendChild(projects);

        //empty div that is appeneded to sidebar so that it is spaced properly. For some reason grid-row assignments is not working for the account and settings buttons
        let filler = document.createElement('div');
        compactSidebarContentDiv.appendChild(filler);

        const account = document.createElement('img');
        account.id = 'account-side-btn';
        account.src = '../src/images/icons/account.svg'
        // account.textContent = 'ACCOUNT';
        account.addEventListener('click', () => {
                wipeContent(accountPage());
                activePageTracker(storageManagement.onAccountPage);

                changeBtnBg();

        });
        compactSidebarContentDiv.appendChild(account);

        const settings = document.createElement('img');
        settings.id = 'settings-side-btn';
        settings.src = '../src/images/icons/settings.svg'
        // settings.textContent = 'SETTINGS';
        settings.addEventListener('click', () => {
                wipeContent(settingsPage());
                activePageTracker(storageManagement.onSettingsPage);
                changeBtnBg();

        });
        compactSidebarContentDiv.appendChild(settings);



};
