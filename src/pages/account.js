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
    top.className = 'ap-top';

    const topRowOneWrapper = document.createElement('div');
    topRowOneWrapper.id = 'top-row-one-wrapper';
    const profilePic = document.createElement('img');
    profilePic.id = 'ap-profile-pic';
    profilePic.src = localStorage.getItem('pfp');
    const pfpBtnWrapper = document.createElement('div');
    pfpBtnWrapper.setAttribute('style', 'width: 0');

    const profilePicEditBtn = document.createElement('button');
    profilePicEditBtn.className = 'ap-edit-btn';
    profilePicEditBtn.id = 'profile-edit-btn';
    profilePicEditBtn.addEventListener('click', () => {
        document.querySelector('.ap-bottom').setAttribute('style', 'position: relative; top: 0; z-index: 0; background-color: #323233;opacity: 100;');
    })

    pfpBtnWrapper.appendChild(profilePicEditBtn)

    topRowOneWrapper.append(profilePic, pfpBtnWrapper);



    const topRowTwoWrapper = document.createElement('div');
    topRowTwoWrapper.id = 'top-row-two-wrapper';
    const hello = document.createElement('div');
    hello.id = 'hello';
    hello.textContent = 'Hello, ';
    const username = document.createElement('div');
    username.id = 'ap-username';
    username.textContent = localStorage.getItem('username').trim();

    const btnWrapper = document.createElement('div');
    btnWrapper.id = 'btn-wrapper';
    const usernameEditBtn = document.createElement('button');
    usernameEditBtn.className = 'ap-edit-btn';
    usernameEditBtn.id = 'username-edit-btn';
    // usernameEditBtn.textContent = '';
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

            if (!username.textContent.trim().length) {
                username.textContent = ls_username;

            }

            if (/\s{2,}/.test(username.textContent) === true) {
                let newStr = username.textContent.replace(/\s{2,}/, ' ');
                username.textContent = newStr;
            }
            ls_username = username.textContent;
            localStorage.setItem('username', ls_username.trim());

            document.querySelector('#header-username').textContent = localStorage.getItem('username').trim();

        }
    })


    btnWrapper.appendChild(usernameEditBtn)

    topRowTwoWrapper.append(hello, username, btnWrapper);

    top.append(topRowOneWrapper, topRowTwoWrapper);



    const bottom = document.createElement('div');
    bottom.setAttribute('style', ' width: 100%; height: 100%; grid-row: 2; display: grid; grid-template-rows: auto 1fr');
    bottom.className = 'ap-bottom';
    const bottomRowOneWrapper = document.createElement('div');
    bottomRowOneWrapper.id = 'bottom-row-one-wrapper';
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'SAVE';
    saveBtn.id = 'ap-save-btn';
    saveBtn.addEventListener('click', () => {
        let pfp = localStorage.setItem('pfp', profilePic.src);

        let headerPfp = document.querySelector('#header-pfp');
        headerPfp.src = localStorage.getItem('pfp');

        document.querySelector('.ap-bottom').setAttribute('style', 'position: relative; top: -20.3rem;');



    })

    bottomRowOneWrapper.appendChild(saveBtn);

    const bottomRowTwoWrapper = document.createElement('div');
    bottomRowTwoWrapper.id = 'bottom-row-two-wrapper;'
    const profilePicCollection = document.createElement('div');

    profilePicCollection.id = 'profile-pic-collection';

    //directories to different pfp images. I will interate through this in the for loop below
    const picsArr = [pfpLinks.one, pfpLinks.two, pfpLinks.three, pfpLinks.four, pfpLinks.five, pfpLinks.six, pfpLinks.seven, pfpLinks.eight, pfpLinks.nine, pfpLinks.ten, pfpLinks.eleven, pfpLinks.twelve, pfpLinks.thirteen, pfpLinks.fourteen, pfpLinks.fifteen];

    for (let i = 0; i < picsArr.length; i++) {
        const element = document.createElement('img');
        element.src = picsArr[i];

        element.setAttribute('style', 'height: 5rem; width: 5rem; border-radius: 50%; cursor: pointer; background-size: contain;');
        element.addEventListener('click', () => {
            profilePic.src = picsArr[i];

            console.log('click!');
        })

        profilePicCollection.appendChild(element);
    }

    bottomRowTwoWrapper.appendChild(profilePicCollection);

    bottom.append(bottomRowOneWrapper, bottomRowTwoWrapper);

    accountContent.append(top, bottom);

    container.appendChild(accountContent);

    return container;
}