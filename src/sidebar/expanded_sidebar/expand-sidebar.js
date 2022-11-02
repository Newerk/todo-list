import { content } from "../.."
import '../expanded_sidebar/expanded-sidebar.css'

//is the content page passes below a certain width, collaspe the expanded sidebar through JS

export const expandSidebar = () => {
    const expandedContainer = document.createElement('div');
    expandedContainer.className = 'expanded-container';

    const retract = document.createElement('button');
    retract.id = 'retract-btn-ex';
    retract.textContent = '<';
    expandedContainer.appendChild(retract);


    const home = document.createElement('button');
    home.id = 'home-btn-ex';
    home.textContent = 'HOME';
    expandedContainer.appendChild(home);

    const today = document.createElement('button');
    today.id = 'today-btn-ex';
    today.textContent = 'TODAY';
    expandedContainer.appendChild(today);

    const upcoming = document.createElement('button');
    upcoming.id = 'upcoming-btn-ex';
    upcoming.textContent = 'UPCOMING';
    expandedContainer.appendChild(upcoming);

    const pastDue = document.createElement('button');
    pastDue.id = 'pastdue-btn-ex';
    pastDue.textContent = 'PAST DUE';
    expandedContainer.appendChild(pastDue);

    const projects = document.createElement('button');
    projects.id = 'projects-btn-ex';
    projects.textContent = 'PROJECTS';
    expandedContainer.appendChild(projects);

    const account = document.createElement('button');
    account.id = 'account-btn-ex';
    account.textContent = 'ACCOUNT';
    expandedContainer.appendChild(account);

    const settings = document.createElement('button');
    settings.id = 'settings-btn-ex';
    settings.textContent = 'SETTINGS';
    expandedContainer.appendChild(settings);


    content.appendChild(expandedContainer);
}