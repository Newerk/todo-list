import { content } from ".";

export const wipeContent = (page) => {
    content.childNodes.forEach(el => el.remove());
    return content.appendChild(page);    
}