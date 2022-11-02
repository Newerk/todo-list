import { content } from "../.."
import '../expanded_sidebar/expanded-sidebar.css'
import { expandedSidebarLogic } from "./expanded-sidebar-logic";

//if the content page passes below a certain width, collaspe the expanded sidebar through JS

export const expandSidebar = () => {
expandedSidebarLogic();

    const expandedContainer = document.createElement('div');
    expandedContainer.className = 'expanded-container';

    const retract = document.createElement('button');
    retract.className = 'extended-btns';
    retract.id = 'retract-btn-ex';
    retract.textContent = '<';
    expandedContainer.appendChild(retract);


    const home = document.createElement('button');
    home.className = 'extended-btns';
    home.id = 'home-btn-ex';
    home.textContent = 'HOME';
    expandedContainer.appendChild(home);

    const today = document.createElement('button');
    today.className = 'extended-btns';
    today.id = 'today-btn-ex';
    today.textContent = 'TODAY';
    expandedContainer.appendChild(today);

    const upcoming = document.createElement('button');
    upcoming.className = 'extended-btns';
    upcoming.id = 'upcoming-btn-ex';
    upcoming.textContent = 'UPCOMING';
    expandedContainer.appendChild(upcoming);

    const pastDue = document.createElement('button');
    pastDue.className = 'extended-btns';
    pastDue.id = 'pastdue-btn-ex';
    pastDue.textContent = 'PAST DUE';
    expandedContainer.appendChild(pastDue);

    const projects = document.createElement('button');
    projects.className = 'extended-btns';
    projects.id = 'projects-btn-ex';
    projects.textContent = 'PROJECTS';
    expandedContainer.appendChild(projects);

    const account = document.createElement('button');
    account.className = 'extended-btns';
    account.id = 'account-btn-ex';
    account.textContent = 'ACCOUNT';
    expandedContainer.appendChild(account);

    const settings = document.createElement('button');
    settings.className = 'extended-btns';
    settings.id = 'settings-btn-ex';
    settings.textContent = 'SETTINGS';
    expandedContainer.appendChild(settings);


    content.appendChild(expandedContainer);

}