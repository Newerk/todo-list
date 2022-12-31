import { storageManagement } from "../local-storage";

let projects = JSON.parse(localStorage.getItem('projects'));

export let selectedProject = projects.find(obj => {
    return obj.id === storageManagement.idOfActiveProject;
});
