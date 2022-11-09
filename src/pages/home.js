import './home.css'
import { content } from ".."
import { newTaskBtn } from "./new-task-btn"
import { todoHeader } from '../todo_row/todo-header';

export const homePage = () => {
    // will be used as argument for appending child to the proper div

    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%;')
    container.className = 'tasks-container';

    const newTask = document.createElement('div');
    newTask.className = 'new-task-container';
    newTask.setAttribute('style', 'display: flex; justify-content: end')
    newTask.appendChild(newTaskBtn());

    container.appendChild(newTask);

    const todoListContainer = document.createElement('div');
    todoListContainer.className = 'todo-list-container';

    container.appendChild(todoHeader());
    container.appendChild(todoListContainer);
    

    // content.appendChild(container);

    return container;

}
