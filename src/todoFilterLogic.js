export const todoFilterLogic = (obj) => {
    let todaysDate = new Date;
    // let formattedDate = `${todaysDate.getMonth()+1}/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;
    let formattedTodaysDate = `${todaysDate.getFullYear()}-${todaysDate.getMonth()+1}-${todaysDate.getDate()}`;


    let breakApart = obj.dueDate.split('/');
    let formattedDueDate = `${breakApart[2]}-${breakApart[0]}-${breakApart[1]}`

    if (formattedDueDate === formattedTodaysDate) {
        obj.filter = 'today';

    } else if (formattedDueDate > formattedTodaysDate) {
        obj.filter = 'upcoming';

    } else if (formattedDueDate < formattedTodaysDate) {
        obj.filter = 'pastdue';

    }

}


//needs to update everyday, or every time the page is loaded so that once a project becomes past due, it will have its
// filter changed, and then be visible in the past due tab w/o  manually changing it
const updateFilter = () => {

}

