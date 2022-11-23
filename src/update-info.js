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

export const updateScreen = () => {
    /*perhaps add a boolean value on each page module that lets a user know if they
    are on that page or Notification.
                exmaple of why this can be useful:
                
                switch (currentPage === true) {
                        case home.value:
                            //build DOM for all todos
                        break;

                        case today.value:
                            //build DOM for todos due today
                        break;
                               
                        case upcoming.value:
                            //build DOM for upcoming todos
                        break;

                        case pastDue.value:
                            //build DOM for pastDue todos
                        break;
                }
    */

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
