//Module will appropriately place header content into the display grid layout


//the dot notation 'textContent' are placeholder values for the content that will be assigned to the page header
export const headerContent = () => {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'header';
        document.body.appendChild(headerDiv);

        const logo = document.createElement('img');
        logo.id = 'header-logo';
        logo.src = '../src/images/icons/logo.svg'
        logo.setAttribute('style', 'grid-column: 1 / 2; color: white; place-self: center');
        headerDiv.appendChild(logo);

        const websiteName = document.createElement('div');
        websiteName.id = 'website-name';
        websiteName.textContent = 'WebsiteName';
        websiteName.setAttribute('style', 'grid-column: 2 / 3; color: white; place-self: center; font-size: 1.8rem')
        headerDiv.appendChild(websiteName);


        const userName = document.createElement('div');
        userName.id = 'header-username';
        userName.textContent = localStorage.getItem('username');
        userName.setAttribute('style', 'grid-column: 4 / 5; color: white; place-self: center');
        headerDiv.appendChild(userName);

        const pfp = document.createElement('img');
        pfp.id = 'header-pfp';
        pfp.src = localStorage.getItem('pfp');
        pfp.setAttribute('style', 'grid-column: 5 / 6; color: white; height: 3rem; width: 3rem; background-color: white; border-radius: 3rem; place-self: center');
        headerDiv.appendChild(pfp);
}
