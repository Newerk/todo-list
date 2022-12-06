import './page-styling.css'
import { todoHeader } from '../todo_row/todo-header';

export const upcomingPage = () => {
    // will be used as argument for appending child to the proper div

    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%;')
    container.className = 'tasks-container';

    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';
    topContainer.setAttribute('style', 'display: flex; justify-content: end')


    const upcoming = document.createElement('div');
    upcoming.id = 'upcoming';
    upcoming.textContent = 'Upcoming'
    upcoming.setAttribute('style', 'display: flex; justify-content: start; height: 2rem;')

    topContainer.appendChild(upcoming);
    container.appendChild(topContainer)


    container.appendChild(upcoming);

    const todoListContainer = document.createElement('div');
    todoListContainer.id = 'todo-list-container';

    container.appendChild(todoHeader());
    container.appendChild(todoListContainer);
    

return container;
}
