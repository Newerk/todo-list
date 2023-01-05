//Module will appropriately place header content into the display grid layout


//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page header
export const headerContent = () => {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'header';
        document.body.appendChild(headerDiv);

        const logo = document.createElement('div');
        logo.id = 'header-logo';
        logo.textContent = 'LOGO';
        logo.setAttribute('style', 'grid-column: 1 / 2; color: white');
        headerDiv.appendChild(logo);

        const userName = document.createElement('div');
        userName.id = 'header-username';
        userName.textContent = localStorage.getItem('username');
        userName.setAttribute('style', 'grid-column: 3 / 4; color: white');
        headerDiv.appendChild(userName);

        const pfp = document.createElement('img');
        pfp.id = 'header-pfp';
        pfp.src = localStorage.getItem('pfp');
        pfp.setAttribute('style', 'grid-column: 4 / 5; color: white; height: 3rem; width: 3rem; background-color: white; border-radius: 3rem');
        headerDiv.appendChild(pfp);
}
