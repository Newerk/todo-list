import './page-styling.css'
import { newTaskBtn } from "./new-task-btn"
import { todoHeader } from '../todo_row/todo-header';

export const homePage = () => {
    // will be used as argument for appending child to the proper div

    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%;')
    container.className = 'tasks-container';

    const newTask = document.createElement('div');
    newTask.className = 'top-container';
    newTask.textContent = 'Home';
    newTask.setAttribute('style', 'display: flex; justify-content: space-between; color: white')
    newTask.appendChild(newTaskBtn('.top-container'));

    container.appendChild(newTask);

    const todoListContainer = document.createElement('div');
    todoListContainer.id = 'todo-list-container';

    container.appendChild(todoHeader());
    container.appendChild(todoListContainer);
        
    return container;

}

