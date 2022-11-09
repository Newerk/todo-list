import './home.css'
import { content } from ".."
import { todoHeader } from '../todo_row/todo-header';

export const upcomingPage = () => {
    // will be used as argument for appending child to the proper div

    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%;')
    container.className = 'tasks-container';

    const upcoming = document.createElement('div');
    upcoming.id = 'upcoming';
    upcoming.textContent = 'Upcoming'
    upcoming.setAttribute('style', 'display: flex; justify-content: start')

    container.appendChild(upcoming);

    const todoListContainer = document.createElement('div');
    todoListContainer.className = 'todo-list-container';

    container.appendChild(todoHeader());
    container.appendChild(todoListContainer);
    

    content.appendChild(container);

}
