export const todoFilterLogic = (obj) => {
    let todaysDate = new Date;
    let formattedDate = `${todaysDate.getMonth()+1}/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;

    if (obj.dueDate === formattedDate) {
        obj.filter = 'today';

    } else if (obj.dueDate > formattedDate) {
        obj.filter = 'upcoming';

    } else if (obj.dueDate < formattedDate) {
        obj.filter = 'pastdue';

    }

}