import { updateScreenProjectsLS, updateScreenTasksLS } from "./update-info";

//using  an if statment to check if a localstorage key is existing allows you to keep values after referesh. Other wise it will always reset the localstorage and remake every key to its default values
(() => {
    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', 'Guest')
    }
    if (!localStorage.getItem('current_theme')) {
        localStorage.setItem('current_theme', 'light')
    }
    if (!localStorage.getItem('rows')) {
        localStorage.setItem('rows', '[]')
        updateScreenTasksLS();
    }
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', '[]')
        updateScreenProjectsLS();
    }

})();

export const storageManagement = {
    sideBarIsExpanded: { value: false },
    newTaskMenuActive: { value: false },
    newProjectMenuActive: { value: false },
    priorityMenuActive: { value: false },
    editTaskMenuActive: { value: false },
    projectPopOutActive: { value: false },

    onHomePage: { value: false },
    onTodayPage: { value: false },
    onUpcomingPage: { value: false },
    onPastDuePage: { value: false },
    onProjectsPage: { value: false },
    onAccountPage: { value: false },
    onSettingsPage: { value: false },


    titleOfActiveRow: null,
    priorityOfActiveRow: null,
    idOfActiveRow: null,
    dateOfActiveRow: null,

    titleOfActiveProject: null,
    idOfActiveProject: null,
    descriptionOfActiveProject: null,


}
