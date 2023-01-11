import { updateScreenTasksLS } from "./update-info";

export const todoFilterLogic = (obj) => {
    let todaysDate = new Date;
    // let formattedTodaysDate = `${todaysDate.getMonth()+1}/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;
    let year = todaysDate.getFullYear();
    let month = todaysDate.getMonth() + 1;
    let day = todaysDate.getDate();

    if (day < 10) {

        day = '0' + day;
        
    }

    if (month < 10) {

        month = '0' + month;
        
    }
    
    
    let formattedTodaysDate = `${year}-${month}-${day}`;

    let breakApart = obj.dueDate.split('/');

    let formattedDueDate = `${breakApart[2]}-${breakApart[0]}-${breakApart[1]}`;


    if (formattedDueDate === formattedTodaysDate) {
        obj.filter = 'today';

    } else if (formattedDueDate > formattedTodaysDate) {
        obj.filter = 'upcoming';


    } else if (formattedDueDate < formattedTodaysDate) {
        obj.filter = 'pastdue';

    }

    updateScreenTasksLS();

}
