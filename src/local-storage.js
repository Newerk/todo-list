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
    priorityMenuActive: { value: false },

    onHomePage: { value: false },
    onTodayPage: { value: false },
    onUpcomingPage: { value: false },
    onPastDuePage: { value: false },

}



// export let rows = [];

// const objOne = {
//     title: 'Check email',
//     dueDate: '2022-11-12',
//     description: 'nigerian prince said i won $14,000,000',
//     priorty: 'Urgent',
//     status: 'complete',
// }
// const objTwo = {
//     title: 'Doctor appointment',
//     dueDate: '2023-01-04',
//     description: 'first check up in 10 years',
//     priorty: 'High',
//     status: 'incomplete',

// }
// const objThree = {
//     title: 'Go to Christmas Party',
//     dueDate: '2022-12-25',
//     description: 'secret santa this year, dont forget gifts at home again',
//     priorty: 'Normal',
//     status: 'incomplete',

// }
// const objFour = {
//     title: 'Black friday shopping',
//     dueDate: '2022-11-25',
//     description: 'get a ps5',
//     priorty: 'Normal',
//     status: 'incomplete',

// }
// rows.push(objOne)
// rows.push(objTwo)
// rows.push(objThree)
// rows.push(objFour)


// localStorage.setItem('rows', JSON.stringify(rows));
// console.log(localStorage.getItem('rows'))

// console.log(`using JSON Parse` + JSON.parse(localStorage.getItem('rows')))