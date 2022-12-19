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
    priorityValue.textContent = 'USE JS'; //will replace by retrieving value w/ a getter

    const status = document.createElement('p');
    status.id = 'status';
    status.textContent = 'Status:';

    const statusValue = document.createElement('p');
    statusValue.id = 'status-value';
    statusValue.textContent = 'USE JS'; //will replace by retrieving value w/ a getter

    const dateCreation = document.createElement('p');
    dateCreation.id = 'date-creation';
    dateCreation.textContent = 'Date Created:';

    const dateCreationValue = document.createElement('p');
    dateCreationValue.id = 'date-creation-value';
    dateCreationValue.textContent = 'USE JS'; //will replace by retrieving value w/ a getter

    topContainer.appendChild(priority)
    topContainer.appendChild(priorityValue)
    topContainer.appendChild(status)
    topContainer.appendChild(statusValue)
    topContainer.appendChild(dateCreation)
    topContainer.appendChild(dateCreationValue)


    const middleContainer = document.createElement('div');
    middleContainer.className = 'middle-container';

    const descriptionTitle = document.createElement('p');
    descriptionTitle.textContent = 'Description';

    const descriptionText = document.createElement('p');
    descriptionText.id = 'description-text';
    // descriptionText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    //placeholder read more. Will instead work dynamically in implementation
    const readMore = document.createElement('a');
    readMore.textContent =  'Read More';
    readMore.id = 'read-more';

    middleContainer.appendChild(descriptionTitle);
    middleContainer.appendChild(descriptionText);
    middleContainer.appendChild(readMore);



    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';
    const editBtn = document.createElement('button');
    editBtn.id = 'edit-btn';
    editBtn.textContent = 'EDIT';

    bottomContainer.appendChild(editBtn);

    
    descriptionContainer.appendChild(topContainer);
    descriptionContainer.appendChild(middleContainer)
    descriptionContainer.appendChild(bottomContainer)

    return descriptionContainer;
}