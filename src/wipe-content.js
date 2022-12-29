import { content } from ".";
import { storageManagement } from "./local-storage";

//when local storage is added, it will pull in the appropiate saved data based on the 'page' and load it

export const wipeContent = (page) => {
    content.childNodes.forEach(el => el.remove());
    content.appendChild(page);    
    storageManagement.editTaskMenuActive.value = false;
    storageManagement.newTaskMenuActive.value = false;
    storageManagement.priorityMenuActive.value = false;
    storageManagement.projectPopOutActive.value = false;
    storageManagement.newProjectMenuActive.value = false;
    storageManagement.sideBarIsExpanded.value = false;
}