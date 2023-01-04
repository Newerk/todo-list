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
    username.textContent = localStorage.getItem('username');
    const usernameEditBtn = document.createElement('button');
    usernameEditBtn.className = 'ap-edit-btn';
    usernameEditBtn.id = 'username-edit-btn';

    topRowTwoWrapper.append(hello, username, usernameEditBtn);

    top.append(topRowOneWrapper, topRowTwoWrapper);





    const bottom = document.createElement('div');
    bottom.setAttribute('style', 'background-color: red; width: 100%; height: 100%; grid-row: 2; display: grid; grid-template-rows: auto 1fr');
    const bottomRowOneWrapper = document.createElement('div');
    bottomRowOneWrapper.id = 'bottom-row-one-wrapper';
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'SAVE';

    bottomRowOneWrapper.appendChild(saveBtn);

    const bottomRowTwoWrapper = document.createElement('div');
    bottomRowTwoWrapper.id = 'bottom-row-two-wrapper;'
    const profilePicCollection = document.createElement('div');

    profilePicCollection.id = 'profile-pic-collection';


    const picsArr = []//directories to different pfp images. I will interate through this in the for loop below

    //will be updated to: for (let i = 0; i < picsArr.length; i++) 
    for (let i = 0; i < 15; i++) {
        const test = document.createElement('div');
        test.setAttribute('style', 'height: 5rem; width: 5rem; background-color: orange; border-radius: 50%; cursor: pointer;');
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