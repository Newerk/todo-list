import { content } from "..";
import './new-task.css';

const buildPopUpMenu = () => {
    const priorityPopUpMenu = document.createElement('div');
    priorityPopUpMenu.className = 'priority-popup';


    const normalPriority = document.createElement('button');
    normalPriority.id = 'normal-priority-btn';

    const highPriority = document.createElement('button');
    highPriority.id = 'high-priority-btn';

    const urgentPriority = document.createElement('button');
    urgentPriority.id = 'urgent-priority-btn';



    priorityPopUpMenu.appendChild(normalPriority);
    priorityPopUpMenu.appendChild(highPriority);
    priorityPopUpMenu.appendChild(urgentPriority);
    content.appendChild(priorityPopUpMenu);
}

export default buildPopUpMenu;