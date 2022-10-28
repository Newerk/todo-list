import {headerContent} from './header-content.js'

const content = document.getElementById('content');
// content.textContent = "'TEST'";

document.body.appendChild(content);

const headerDiv = document.querySelector('.header');
headerContent();
