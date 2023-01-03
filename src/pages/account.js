import './page-styling.css'

export const accountPage = () => {
    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%');
    container.className = 'account-container';

    const accountContent = document.createElement('div');
    accountContent.className = 'account-content';
    accountContent.setAttribute('style', 'display: grid; grid-template-rows: 1fr 1fr; width: 100%; height: 100%;');

    const top = document.createElement('div');
    top.setAttribute('style', 'background-color: blue; width: 100%; height: 100%; grid-row: 1')

    const topRowOneWrapper = document.createElement('div');
    const profilePic = document.createElement('div');
    const profilePicEditBtn = document.createElement('div');


    const topRowTwoWrapper = document.createElement('div');
    const hello = document.createElement('div');
    hello.textContent = 'Hello, ';
    const username = document.createElement('div');
    const usernameEditBtn = document.createElement('div');




    const bottom = document.createElement('div');
    bottom.setAttribute('style', 'background-color: red; width: 100%; height: 100%; grid-row: 2')

    accountContent.append(top, bottom);

    container.appendChild(accountContent);

    return container;
}