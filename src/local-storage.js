import { updateInfo } from "./update-info";

//using  an if statment to check if a localstorage key is existing allows you to keep values after referesh. Other wise it will always reset the localstorage and remake every key to its default values
(() => {
    if (!localStorage.getItem('todo_list')) {
        localStorage.setItem('todo_list', '[]')
    }
    if (!localStorage.getItem('current_theme')) {
        localStorage.setItem('current_theme', 'light')
    }
    if (!localStorage.getItem('rows')) {
        localStorage.setItem('rows', '[]')
        updateInfo();
    }

})();

export const storageManagement = {
    sideBarIsExpanded: { value: false },
    newTaskMenuActive: { value: false },
    newProjectMenuActive: {value: false},
    priorityMenuActive: { value: false },
    editTaskMenuActive: { value: false },

    onHomePage: { value: false },
    onTodayPage: { value: false },
    onUpcomingPage: { value: false },
    onPastDuePage: { value: false },

    titleOfActiveRow: null,
    priorityOfActiveRow: null,
    idOfActiveRow: null,
    dateOfActiveRow: null,


}
