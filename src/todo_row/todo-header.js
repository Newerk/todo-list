import { content } from "..";

/*
NOTE: The arrows on the header will instead appear on hover, it clicked once, it will first show the up arrow, if clicked again
 it will show the down arrow, and so on and so on. if the user clicks on a different section to filter with, it will remove the 
 arrow shown on the last section used, and then apply the rules to the new selected section and filter based on the most current 
 section used on the header
 */

export const todoHeader = () => {
    const header = document.createElement('div');
    header.id = 'todo-header';
    header.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: grey; ')

    const statusContainer = document.createElement('div');
    statusContainer.setAttribute('style', 'border: 1px solid black; padding: 0 .5rem 0 .5rem; display: flex;');
    statusContainer.id = 'header-status';
    const statusText = document.createElement('span');
    statusText.textContent = "Status";
    const statusFilter = document.createElement('div');
    statusFilter.setAttribute('style', 'padding-left: .5rem;');
    statusFilter.textContent = '↑';
    statusContainer.appendChild(statusText);
    statusContainer.appendChild(statusFilter);


    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('style', 'border: 1px solid black; padding-left: .5rem; display: flex;');
    titleContainer.id = 'header-title';
    const titleText = document.createElement('span');
    titleText.textContent = 'Title';
    const titleFilter = document.createElement('div');
    titleFilter.setAttribute('style', 'padding-left: .5rem;');
    titleFilter.textContent = '↑';
    titleContainer.appendChild(titleText);
    titleContainer.appendChild(titleFilter);


    const priorityContainer = document.createElement('div');
    priorityContainer.setAttribute('style', 'border: 1px solid black; padding: 0 .5rem 0 .5rem; display: flex;');
    priorityContainer.id = 'header-priority';
    const priorityText = document.createElement('span');
    priorityText.textContent = 'Priority';
    const priorityFilter = document.createElement('div');
    priorityFilter.setAttribute('style', 'padding-left: .5rem;');
    priorityFilter.textContent = '↑';
    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(priorityFilter);


    const dueDateContainer = document.createElement('div');
    dueDateContainer.setAttribute('style', 'border: 1px solid black; width: 13rem; padding-left: .5rem; display: flex;');
    dueDateContainer.id = 'header-due-date';
    const dueDateText = document.createElement('span');
    dueDateText.textContent = 'Due Date'
    const dueDateFilter = document.createElement('div');
    dueDateFilter.setAttribute('style', 'padding-left: .5rem;');
    dueDateFilter.textContent = '↑';
    dueDateContainer.appendChild(dueDateText);
    dueDateContainer.appendChild(dueDateFilter);

    header.appendChild(statusContainer);
    header.appendChild(titleContainer);
    header.appendChild(priorityContainer);
    header.appendChild(dueDateContainer);

    content.appendChild(header);

    // return header;
}