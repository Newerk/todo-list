import './new-task-menu.css';

export const buildPopUpMenu = () => {
    const priorityPopUpMenu = document.createElement('div');
    priorityPopUpMenu.className = 'priority-popup';


    const normalPriority = document.createElement('button');
    normalPriority.id = 'normal-priority-btn';
    normalPriority.textContent = 'Normal';

    const highPriority = document.createElement('button');
    highPriority.id = 'high-priority-btn';
    highPriority.textContent = 'High';

    const urgentPriority = document.createElement('button');
    urgentPriority.id = 'urgent-priority-btn';
    urgentPriority.textContent = 'Urgent';

    switch (document.querySelector('#priority-btn').textContent) {
        case 'Normal':
            priorityPopUpMenu.setAttribute('style', 'background-color: #58CFFE')

            break;
        case 'High':
            priorityPopUpMenu.setAttribute('style', 'background-color: #FEEA00')

            break;
        case 'Urgent':
            priorityPopUpMenu.setAttribute('style', 'background-color: #FF1337 ')

            break;

        default:
            priorityPopUpMenu.setAttribute('style', 'background-color: #EFEFEF')

            break;
    }


    priorityPopUpMenu.appendChild(normalPriority);
    priorityPopUpMenu.appendChild(highPriority);
    priorityPopUpMenu.appendChild(urgentPriority);

    return priorityPopUpMenu;

}
