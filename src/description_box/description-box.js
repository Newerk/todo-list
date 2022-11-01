import { content } from "..";
import './description-box.css'

export const buildDescriptionBox = () => {
    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description-box-container';

    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';

    const priority = document.createElement('p');
    priority.id = 'priority';
    priority.textContent = 'Priority:';

    const priorityValue = document.createElement('p');
    priorityValue.id = 'priority-value';
    priorityValue.textContent = 'USE JS TO FILL';

    const status = document.createElement('p');
    status.id = 'status';
    status.textContent = 'Status:';

    const statusValue = document.createElement('p');
    statusValue.id = 'status-value';
    statusValue.textContent = 'USE JS TO FILL';

    const dateCreation = document.createElement('p');
    dateCreation.id = 'date-creation';
    dateCreation.textContent = 'Date Created:';

    const dateCreationValue = document.createElement('p');
    dateCreationValue.id = 'date-creation-value';
    dateCreationValue.textContent = 'USE JS TO FILL';

    topContainer.appendChild(priority)
    topContainer.appendChild(priorityValue)
    topContainer.appendChild(status)
    topContainer.appendChild(statusValue)
    topContainer.appendChild(dateCreation)
    topContainer.appendChild(dateCreationValue)


    const middleContainer = document.createElement('div');


    const bottomContainer = document.createElement('div');

    

    descriptionContainer.appendChild(topContainer)

    content.appendChild(descriptionContainer);

}