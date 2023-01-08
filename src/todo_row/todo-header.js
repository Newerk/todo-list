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
    header.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: grey; align-items: center ');
    header.addEventListener('resize', function() {
        header.setAttribute('style', 'width: 1fr;');

    })

    const statusContainer = document.createElement('div');
    statusContainer.setAttribute('style', 'padding: 0 .5rem 0 .5rem; display: flex;');
    statusContainer.id = 'header-status';
    const statusText = document.createElement('span');
    statusText.textContent = "Status";
    statusContainer.appendChild(statusText);


    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('style', 'border-left: 1px solid black; padding-left: .5rem; display: flex;');
    titleContainer.id = 'header-title';
    const titleText = document.createElement('span');
    titleText.textContent = 'Title';
    titleContainer.appendChild(titleText);


    const priorityContainer = document.createElement('div');
    priorityContainer.setAttribute('style', 'border-left: 1px solid black; padding: 0 .5rem 0 .5rem; display: flex;');
    priorityContainer.id = 'header-priority';
    const priorityText = document.createElement('span');
    priorityText.textContent = 'Priority';
    priorityContainer.appendChild(priorityText);


    const dueDateContainer = document.createElement('div');
    dueDateContainer.setAttribute('style', 'border-left: 1px solid black; width: 13rem; padding-left: .5rem; display: flex;');
    dueDateContainer.id = 'header-due-date';
    const dueDateText = document.createElement('span');
    dueDateText.textContent = 'Due Date'
    dueDateContainer.appendChild(dueDateText);

    header.appendChild(statusContainer);
    header.appendChild(titleContainer);
    header.appendChild(priorityContainer);
    header.appendChild(dueDateContainer);

    content.appendChild(header);

    return header;
}