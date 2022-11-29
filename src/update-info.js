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


    // perhaps add a boolean value on each page module that lets a user know if they
    // are on that page or Notification.
    //             exmaple of why this can be useful:

    switch (true) {
        case activePageTracker(storageManagement.onHomePage):
            //build DOM for all todos
            wipe();
            const showAll = (() => {        
                let rows = JSON.parse(localStorage.getItem('rows'));
        
                for (let index = 0; index < rows.length; index++) {
                    const element = rows[index];
        
                    todoListRows(element.title, element.priority, element.dueDate).build();
                }
            })();

            break;

        case activePageTracker(storageManagement.onTodayPage):
            //build DOM for todos due today
            wipe();


            break;

        case activePageTracker(storageManagement.onUpcomingPage):
            //build DOM for upcoming todos
            wipe();

            break;

        case activePageTracker(storageManagement.onPastDuePage):
            //build DOM for pastDue todos
            wipe();

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


    //this feature function desnt work yet

    const showAll = () => {
        // wipe();

        let rows = JSON.parse(localStorage.getItem('rows'));

        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];

            todoListRows(element.title, element.priority, element.dueDate).build();
        }
    }



}

function wipe() {
    document.body.querySelectorAll('#row').forEach(el => el.remove());
};