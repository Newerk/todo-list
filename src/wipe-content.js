import { content } from ".";

//when local storage is added, it will pull in the appropiate saved data based on the 'page' and load it

export const wipeContent = (page) => {
    content.childNodes.forEach(el => el.remove());
    content.appendChild(page);    
}