import './page-styling.css'

export const accountPage = () => {
    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%');
    container.className = 'account-container';

    const accountContent = document.createElement('div');
    accountContent.className = 'account-content';
    accountContent.setAttribute('style', 'display: grid; grid-template-rows: 1fr 1fr; width: 100%; height: 100%;');

    const top = document.createElement('div');
    top.setAttribute('style', 'background-color: blue; width: 100%; height: 100%; grid-row: 1; display: grid; grid-template-rows: auto 1fr')

    const topRowOneWrapper = document.createElement('div');
    topRowOneWrapper.id = 'top-row-one-wrapper';
    const profilePic = document.createElement('div');
    profilePic.id = 'ap-profile-pic';
    const profilePicEditBtn = document.createElement('div');
    profilePicEditBtn.className = 'ap-edit-btn';
    profilePicEditBtn.id = 'profile-edit-btn';

    topRowOneWrapper.append(profilePic, profilePicEditBtn);



    const topRowTwoWrapper = document.createElement('div');
    topRowTwoWrapper.id = 'top-row-two-wrapper';
    const hello = document.createElement('div');
    hello.textContent = 'Hello, ';
    const username = document.createElement('div');
    username.textContent = '______________________'
    const usernameEditBtn = document.createElement('div');
    usernameEditBtn.className = 'ap-edit-btn';
    usernameEditBtn.id = 'username-edit-btn';

    topRowTwoWrapper.append(hello, username, usernameEditBtn);

    top.append(topRowOneWrapper, topRowTwoWrapper);





    const bottom = document.createElement('div');
    bottom.setAttribute('style', 'background-color: red; width: 100%; height: 100%; grid-row: 2')

    accountContent.append(top, bottom);

    container.appendChild(accountContent);

    return container;
}