import './page-styling.css'
import { pfpLinks } from '../images/profile-pics/links-to-pfp-pics';

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
    profilePic.setAttribute('style', `background-image: url(${localStorage.getItem('pfp')})`);
    const profilePicEditBtn = document.createElement('button');
    profilePicEditBtn.className = 'ap-edit-btn';
    profilePicEditBtn.id = 'profile-edit-btn';

    profilePic.appendChild(profilePicEditBtn)

    topRowOneWrapper.append(profilePic);



    const topRowTwoWrapper = document.createElement('div');
    topRowTwoWrapper.id = 'top-row-two-wrapper';
    const hello = document.createElement('div');
    hello.id = 'hello';
    hello.textContent = 'Hello, ';
    const username = document.createElement('div');
    username.id = 'ap-username';
    username.textContent = localStorage.getItem('username');

    const btnWrapper = document.createElement('div');
    btnWrapper.id = 'btn-wrapper';
    const usernameEditBtn = document.createElement('button');
    usernameEditBtn.className = 'ap-edit-btn';
    usernameEditBtn.id = 'username-edit-btn';
    usernameEditBtn.textContent = '';
    usernameEditBtn.addEventListener('click', () => {
        let ls_username = localStorage.getItem('username');


        if (usernameEditBtn.textContent !== 'SAVE') {
            usernameEditBtn.setAttribute('style', 'width: 5rem; border-radius: 1rem; font-size: 1rem; color: black;');
            usernameEditBtn.textContent = 'SAVE';
            username.contentEditable = true;

        } else {
            usernameEditBtn.textContent = '';
            usernameEditBtn.setAttribute('style', 'width: 1.5rem; height: 1.5rem; position: relative; top: -1rem;');
            username.contentEditable = false;

            ls_username = username.textContent;
            localStorage.setItem('username', ls_username);

            document.querySelector('#header-username').textContent = localStorage.getItem('username');

        }
    })

    btnWrapper.appendChild(usernameEditBtn)

    topRowTwoWrapper.append(hello, username, btnWrapper);

    top.append(topRowOneWrapper, topRowTwoWrapper);



    const bottom = document.createElement('div');
    bottom.setAttribute('style', 'background-color: red; width: 100%; height: 100%; grid-row: 2; display: grid; grid-template-rows: auto 1fr');
    const bottomRowOneWrapper = document.createElement('div');
    bottomRowOneWrapper.id = 'bottom-row-one-wrapper';
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'SAVE';
    saveBtn.addEventListener('click', () => {
    })

    bottomRowOneWrapper.appendChild(saveBtn);

    const bottomRowTwoWrapper = document.createElement('div');
    bottomRowTwoWrapper.id = 'bottom-row-two-wrapper;'
    const profilePicCollection = document.createElement('div');

    profilePicCollection.id = 'profile-pic-collection';

    //directories to different pfp images. I will interate through this in the for loop below
    const picsArr = [pfpLinks.one,pfpLinks.two, pfpLinks.three, pfpLinks.four, pfpLinks.five, pfpLinks.six, pfpLinks.seven, pfpLinks.eight, pfpLinks.nine, pfpLinks.ten, pfpLinks.eleven, pfpLinks.twelve, pfpLinks.thirteen, pfpLinks.fourteen, pfpLinks.fifteen];

    for (let i = 0; i < picsArr.length; i++) {
        const test = document.createElement('img');
        test.src = picsArr[i];

        test.setAttribute('style', 'height: 5rem; width: 5rem; background-color: orange; border-radius: 50%; cursor: pointer; background-size: contain;');
        test.addEventListener('click', () => {
            //apply selected picture to profile and header
            console.log('click!');
        })
        profilePicCollection.appendChild(test);


    }

    bottomRowTwoWrapper.appendChild(profilePicCollection);

    bottom.append(bottomRowOneWrapper, bottomRowTwoWrapper);



    accountContent.append(top, bottom);

    container.appendChild(accountContent);

    return container;
}