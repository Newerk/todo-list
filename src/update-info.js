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
import { activePageTracker } from "./active-page-tracker";

export const updateInfo = () => {
    let rows = JSON.parse(localStorage.getItem('rows'));

    const showFromFilter = (filter) => {
        for (let i = 0; i < rows.length; i++) {
            const element = rows[i];

            if (element.filter === filter) {
                todoListRows(element.title, element.priority, element.dueDate).build();

            }
        }
    }

    //needs to update everyday, or every time the page is loaded so that once a project becomes past due, it will have its
    // filter changed, and then be visible in the past due tab w/o  manually changing it
    const updateFilter = (obj) => {
        const today = new Date;
        const todaysDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        for (let i = 0; i < obj.length; i++) {
            const element = obj[i];

            if (element.dueDate < todaysDate) {
                element.filter = 'pastdue';
                console.log(JSON.stringify(element) + ' is now pastdue');
            }
        }

        localStorage.setItem('rows', JSON.stringify(obj));

    }

    switch (true) {
        case storageManagement.onHomePage.value:
            //build DOM for all todos
            wipe();
            const showAll = (() => {

                for (let i = 0; i < rows.length; i++) {
                    const element = rows[i];

                    todoListRows(element.title, element.priority, element.dueDate).build();
                }
            })();

            break;

        case storageManagement.onTodayPage.value:
            //build DOM for todos due today
            wipe();
            showFromFilter('today');
            updateFilter(rows);


            break;

        case storageManagement.onUpcomingPage.value:
            //build DOM for upcoming todos
            wipe();
            showFromFilter('upcoming');
            updateFilter(rows);


            break;

        case storageManagement.onPastDuePage.value:
            //build DOM for pastDue todos
            wipe();
            showFromFilter('pastdue');
            updateFilter(rows);


            break;
    }


    /*
A WAY TO GET THE EXACT OBJECT THROUGH PROPERY VALUES WITHOUT A FOR LOOP

    const jsObjects = [
        {a: 1, b: 2}, 
        {a: 3, b: 4}, 
        {a: 5, b: 6}, 
        {a: 7, b: 8}
    ]

    let result = jsObjects.filter(obj => {
    return obj.b === 6
    })

    console.log(result) 
    */

}

function wipe() {
    document.body.querySelectorAll('#row').forEach(el => el.remove());
};


