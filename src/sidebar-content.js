//will appropriately place header content in the grid of the sidebar

//Retrieve the compact sidebar div to manipulate content
const compactSidebarContentDiv = document.querySelector('.compact-sidebar')

//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page header
export const compactSidebarContent = () => {
    const homeBtn = (() => {
        const home = document.createElement('div');
        home.id = 'home-btn';
        home.textContent = 'HOME';
        home.setAttribute('style', 'grid-row: 1 / 2; color: white');
        compactSidebarContentDiv.appendChild(home);
    })();

    const todayBtn = (() => {
        const today = document.createElement('div');
        today.id = 'today-btn';
        today.textContent = 'TODAY';
        today.setAttribute('style', 'grid-row: 2 / 3; color: white');
        compactSidebarContentDiv.appendChild(today);
    })();

    const upcomingBtn = (() => {
        const upcoming = document.createElement('div');
        upcoming.id = 'upcoming-btn';
        upcoming.textContent = 'UPCOMING';
        upcoming.setAttribute('style', 'grid-row: 3 / 4; color: white');
        compactSidebarContentDiv.appendChild(upcoming);
    })();

    const pastDueBtn = (() => {
        const pastDue = document.createElement('div');
        pastDue.id = 'pastdue-btn';
        pastDue.textContent = 'PAST DUE';
        pastDue.setAttribute('style', 'grid-row: 4 / 5; color: white');
        compactSidebarContentDiv.appendChild(pastDue);
    })();

    const projectsBtn = (() => {
        const projects = document.createElement('div');
        projects.id = 'projects-btn';
        projects.textContent = 'PROJECTS';
        projects.setAttribute('style', 'grid-row: 5 / 6; color: white');
        compactSidebarContentDiv.appendChild(projects);
    })();

    const accountBtn = (() => {
        const account = document.createElement('div');
        account.id = 'account-btn';
        account.textContent = 'ACCOUNT';
        account.setAttribute('style', 'grid-row: 7 / 8; color: white');
        compactSidebarContentDiv.appendChild(account);
    })();

    const settingsBtn = (() => {
        const settings = document.createElement('div');
        settings.id = 'settings-btn';
        settings.textContent = 'SETTINGS';
        settings.setAttribute('style', 'grid-row: 8 / 9; color: white');
        compactSidebarContentDiv.appendChild(settings);
    })();
}
