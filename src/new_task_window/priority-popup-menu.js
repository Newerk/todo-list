import { content } from "..";
import './new-task.css';

const buildPopUpMenu = () => {
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


    priorityPopUpMenu.appendChild(normalPriority);
    priorityPopUpMenu.appendChild(highPriority);
    priorityPopUpMenu.appendChild(urgentPriority);
    // content.appendChild(priorityPopUpMenu);
}

export default buildPopUpMenu;