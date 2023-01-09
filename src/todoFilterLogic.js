export const todoFilterLogic = (obj) => {
    let todaysDate = new Date;
    // let formattedTodaysDate = `${todaysDate.getMonth()+1}/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;
    let year = todaysDate.getFullYear();
    let month = todaysDate.getMonth() + 1;
    let day = todaysDate.getDate();

    if (day < 10) {
        console.log('day is less than 10')

        day = '0' + day;
        console.log(day)
        
    }

    if (month < 10) {
        console.log('month is less than 10')

        month = '0' + month;
        console.log(month)
        
    }
    
    
    let formattedTodaysDate = `${year}-${month}-${day}`;
    console.log('formatted todays date is: ' + formattedTodaysDate);


    let breakApart = obj.dueDate.split('/');

    let formattedDueDate = `${breakApart[2]}-${breakApart[0]}-${breakApart[1]}`;
    // let formattedDueDate = `${parseInt(breakApart[0], 10)}/${parseInt(breakApart[1], 10)}/${breakApart[2]}`


    if (formattedDueDate === formattedTodaysDate) {
        obj.filter = 'today';

    } else if (formattedDueDate > formattedTodaysDate) {
        obj.filter = 'upcoming';

        console.log('IT WORKS!!!!');


    } else if (formattedDueDate < formattedTodaysDate) {
        obj.filter = 'pastdue';


    }

    console.log('formatted due date is: ' + formattedDueDate);



}

function MyInt(s){
    this.asString = s;
    this.num = parseInt(s);
}
