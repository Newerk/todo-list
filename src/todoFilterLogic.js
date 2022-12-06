export const todoFilterLogic = (obj) => {
    let todaysDate = new Date;
    // let formattedDate = `${todaysDate.getMonth()+1}/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;
    let formattedTodaysDate = `${todaysDate.getFullYear()}-${todaysDate.getMonth()+1}-${todaysDate.getDate()}`;


    let breakApart = obj.dueDate.split('/');
    let formattedDueDate = `${breakApart[2]}-${breakApart[0]}-${parseInt(breakApart[1])}`

    if (formattedDueDate === formattedTodaysDate) {
        obj.filter = 'today';

    } else if (formattedDueDate > formattedTodaysDate) {
        obj.filter = 'upcoming';

    } else if (formattedDueDate < formattedTodaysDate) {
        obj.filter = 'pastdue';

    }

}



