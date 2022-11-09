import './home.css'
import { content } from ".."
import { todoHeader } from '../todo_row/todo-header';

export const todayPage = () => {
    // will be used as argument for appending child to the proper div

    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%;')
    container.className = 'tasks-container';

    const today = document.createElement('div');
    today.id = 'today';
    today.textContent = 'Today'
    today.setAttribute('style', 'display: flex; justify-content: start')

    container.appendChild(today);

    const todoListContainer = document.createElement('div');
    todoListContainer.className = 'todo-list-container';

    container.appendChild(todoHeader());
    container.appendChild(todoListContainer);
    

    content.appendChild(container);

}
