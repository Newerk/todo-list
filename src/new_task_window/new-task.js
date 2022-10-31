import { content } from "..";
import './new-task.css';

export const buildNewTaskWindow = () => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.className = 'new-task-container';


    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';

    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';


    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';



    const titleInput = document.createElement('div');

    const priorityBtn = document.createElement('button');

    const dueDateBtn = document.createElement('button');

    const exitBtn = document.createElement('button');
    exitBtn.id = 'exit-btn';

    topContainer.appendChild(titleInput);
    topContainer.appendChild(priorityBtn);
    topContainer.appendChild(dueDateBtn);
    topContainer.appendChild(exitBtn);


    const descriptionTopText = document.createElement('p');
    descriptionTopText.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description-input';

    middleContainer.appendChild(descriptionTopText);
    middleContainer.appendChild(descriptionInput);


    const addTaskBtn = document.createElement('button');
    bottomContainer.appendChild(addTaskBtn);




    newTaskContainer.appendChild(topContainer)
    newTaskContainer.appendChild(middleContainer)
    newTaskContainer.appendChild(bottomContainer)

    content.appendChild(newTaskContainer);

}