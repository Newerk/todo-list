/*
this module will be the module that actually builds out the todo lists in the 
content area based on the todoObjects in the localStorage.
everytime the screen is refreshed, new todo is added or removed, new page clicked

when a new page is entered, it wiill take into account whether or not those todos should
display on that page. homepage can show every todo list no matter the filter,
but when a task is past due, only the tasks with duedates before the most current date
will appear on that page

SIMPLY: A Module That Controls which Todos Show on the Screen
*/

import { todoListRows } from "./todo_row/todo";
import { storageManagement } from "./local-storage";
import { projectsCard } from "./projects-card";
import { todoProjectRows } from "./project-todo-row";

export const updateScreenTasksLS = () => {
    let rows = JSON.parse(localStorage.getItem('rows'));

    const showFromFilter = (filter) => {
        for (const iterator of rows) {
            if (iterator.filter === filter) {
                todoListRows(iterator.title, iterator.priority, iterator.dueDate, iterator.status, iterator.id).build();

            }

        }
    }

    //needs to update every time a page is loaded so that once a project becomes past due, it will have its
    // filter changed, and then be visible in the past due tab w/o  manually changing it
    const updateFilter = (obj) => {
        const today = new Date;

        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (day < 10) {
            day = '0' + day;

        }

        if (month < 10) {
            month = '0' + month;

        }
        const todaysDate = `${year}-${month}-${day}`;


        for (const iterator of rows) {
            let dueDateArr = iterator.dueDate.split('/');
            let dueDate = `${dueDateArr[2]}-${dueDateArr[0]}-${dueDateArr[1]}`;

            if (dueDate < todaysDate) {
                iterator.filter = 'pastdue';

            }

            if (dueDate > todaysDate) {
                iterator.filter = 'upcoming';

            }

            if (dueDate === todaysDate) {
                iterator.filter = 'today';

            }


        }

        localStorage.setItem('rows', JSON.stringify(obj));


    }

    switch (true) {
        case storageManagement.onHomePage.value:
            //build DOM for all todos
            wipe('.row');

            for (const iterator of rows) {
                todoListRows(iterator.title, iterator.priority, iterator.dueDate, iterator.status, iterator.id).build();

            }

            break;

        case storageManagement.onTodayPage.value:
            //build DOM for todos due today
            wipe('.row');
            showFromFilter('today');
            updateFilter(rows);


            break;

        case storageManagement.onUpcomingPage.value:
            //build DOM for upcoming todos
            wipe('.row');
            showFromFilter('upcoming');
            updateFilter(rows);


            break;

        case storageManagement.onPastDuePage.value:
            //build DOM for pastDue todos
            wipe('.row');
            showFromFilter('pastdue');
            updateFilter(rows);


            break;
    }
    console.log('updateScreenTasksLS() ran');

}

export const updateScreenProjectsLS = () => {
    let projects = JSON.parse(localStorage.getItem('projects'));

    if (storageManagement.onProjectsPage.value === true) {
        wipe('.projects-card-container');

        for (const iterator of projects) {
            projectsCard(iterator.title, iterator.description, iterator.id).build();

        }
    }
}

export const updateProjectTasksLS = () => {
    let projects = JSON.parse(localStorage.getItem('projects'));


    let selectedProject = projects.find(obj => {
        return obj.id === storageManagement.idOfActiveProject;
    })


    //this needs to be updated. This breaks after swapping pages when the expanded project view is open
    const wipeTasks = (() => {
        document.body.querySelector('#project-tasks-container').innerHTML = '';


    })();

    for (const iterator of selectedProject.tasks) {
        document.body.querySelector('#project-tasks-container').appendChild(todoProjectRows(iterator.title, iterator.priority, iterator.dueDate, iterator.status, iterator.id))


    }


}





function wipe(className) {
    document.body.querySelectorAll(className).forEach(el => el.remove());
};
