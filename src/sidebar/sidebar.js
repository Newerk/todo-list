import { wipeContent } from "../wipe-content";
import { contentContainer } from "..";
import { homePage } from "../pages/home";
import { todayPage } from "../pages/today";
import { upcomingPage } from "../pages/upcoming";
import { pastDuePage } from "../pages/pastdue";


export const sidebar = () => {

    const expandedContainer = document.createElement('div');
    expandedContainer.className = 'expanded-container';
    expandedContainer.setAttribute('style', 'width: 0rem');

    const home = document.createElement('button');
    home.className = 'extended-btns';
    home.id = 'home-btn-ex';
    home.textContent = 'HOME';
    home.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');
    home.addEventListener('click', () => {
        wipeContent(homePage());
    });

    const today = document.createElement('button');
    today.className = 'extended-btns';
    today.id = 'today-btn-ex';
    today.textContent = 'TODAY';
    today.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');
    today.addEventListener('click', () => {
        wipeContent(todayPage());
    });


    const upcoming = document.createElement('button');
    upcoming.className = 'extended-btns';
    upcoming.id = 'upcoming-btn-ex';
    upcoming.textContent = 'UPCOMING';
    upcoming.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');
    upcoming.addEventListener('click', () => {
        wipeContent(upcomingPage());
    });

    const pastDue = document.createElement('button');
    pastDue.className = 'extended-btns';
    pastDue.id = 'pastdue-btn-ex';
    pastDue.textContent = 'PAST DUE';
    pastDue.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');
    pastDue.addEventListener('click', () => {
        wipeContent(pastDuePage());
    });
    

    const projects = document.createElement('button');
    projects.className = 'extended-btns';
    projects.id = 'projects-btn-ex';
    projects.textContent = 'PROJECTS';
    projects.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');

    const account = document.createElement('button');
    account.className = 'extended-btns';
    account.id = 'account-btn-ex';
    account.textContent = 'ACCOUNT';
    account.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');

    const settings = document.createElement('button');
    settings.className = 'extended-btns';
    settings.id = 'settings-btn-ex';
    settings.textContent = 'SETTINGS';
    settings.setAttribute('style', 'width: 0rem; padding: 0rem; border: none;font-size: 0');

    expandedContainer.appendChild(home);
    expandedContainer.appendChild(today);
    expandedContainer.appendChild(upcoming);
    expandedContainer.appendChild(pastDue);
    expandedContainer.appendChild(projects);
    expandedContainer.appendChild(account);
    expandedContainer.appendChild(settings);

    // contentContainer.appendChild(expandedContainer);
    return expandedContainer;

}