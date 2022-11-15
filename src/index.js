import './style.css'
import { headerContent } from './header/header-content.js';
import { homePage } from './pages/home';
import { compactSidebarContent } from './sidebar/compact-sidebar-content';

export const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';


export const content = document.createElement('div');
content.id = 'content';
content.appendChild(homePage());



headerContent();
compactSidebarContent();

document.body.appendChild(contentContainer);

contentContainer.appendChild(content);

//using parse will allow me to directly interact with the objects stores in the localStorage
// console.log(JSON.parse(localStorage.getItem('objectTest'))); 


// const obj = JSON.parse(localStorage.getItem('objectTest'));

// obj.key_two = 'replaced';



const getIndexTwo =  JSON.parse(localStorage.getItem('objectTest_2'));
getIndexTwo._key_two = 'FLKJSDHFLSKJDHFLSDKJFHLDKJHFLSDJHF';

const updatedIndexTwo = JSON.stringify(getIndexTwo);

localStorage.setItem('objectTest_2', updatedIndexTwo);

console.log(localStorage);
// localStorage.removeItem('objectTest');











