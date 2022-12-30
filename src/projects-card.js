import { storageManagement } from './local-storage';
import './projects-card.css'
import { projectPopOut } from './selected-project-popout';
import { updateProjectTasksLS } from './update-info';
// the cards that will be build when a user creates a new project

export const projectsCard = (ls_Title, ls_Description, ls_ID) => {

    const cardContainer = document.createElement('div');
    cardContainer.className = 'projects-card-container';
    cardContainer.id = ls_ID;



    const topContainer = document.createElement('div');
    topContainer.id = 'card-top-container';
    const title = document.createElement('div');
    title.className = 'project-title';
    title.textContent = ls_Title;
    topContainer.appendChild(title);

    //start off being hidden, until the expand button is clicked. the user will know if the project will e
    const middleContainer = document.createElement('div');;
    middleContainer.id = 'card-middle-container';
    const midTitle = document.createElement('div');
    midTitle.className = 'mid-title';
    midTitle.textContent = 'Description:'
    const description = document.createElement('div');
    description.className = 'project-description';
    description.textContent = ls_Description;//perhaps I will add a character limit to the description
    description.setAttribute('style', ` -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;`);
    middleContainer.hidden = true;
    middleContainer.append(midTitle, description);

    const bottomContainer = document.createElement('div');
    bottomContainer.id = 'card-bottom-container';
    const expandArrow = document.createElement('div');
    expandArrow.className = 'expand-arrow';
    expandArrow.textContent = '▼';
    expandArrow.addEventListener('click', () => {
        if (middleContainer.hidden === true) {
            middleContainer.hidden = false;
            expandArrow.textContent = '▲'

        } else {
            middleContainer.hidden = true;
            expandArrow.textContent = '▼'

        }

    })

    if (description.textContent !== '' || storageManagement.descriptionOfActiveProject !== '') {
        bottomContainer.appendChild(expandArrow);

    }

    bottomContainer.addEventListener('mouseover', () => {
        topContainer.setAttribute('style', 'color: white');
        middleContainer.setAttribute('style', 'color: white');

    })


    expandArrow.addEventListener('mouseover', () => {
        expandArrow.setAttribute('style', 'color: yellow')
        topContainer.setAttribute('style', 'color: white');
        middleContainer.setAttribute('style', 'color: white');


    })

    expandArrow.addEventListener('mouseout', () => {
        expandArrow.setAttribute('style', 'color: white')
        topContainer.setAttribute('style', 'color: white');
        middleContainer.setAttribute('style', 'color: white');
    })


    topContainer.addEventListener('mouseover', () => {
        topContainer.setAttribute('style', 'color: yellow');
        middleContainer.setAttribute('style', 'color: yellow');
    })

    topContainer.addEventListener('mouseout', () => {
        topContainer.setAttribute('style', 'color: white');
        middleContainer.setAttribute('style', 'color: white');
    })

    topContainer.addEventListener('click', (e) => {
        const targetedProject = e.target.parentElement.parentElement;
        storageManagement.idOfActiveProject = targetedProject.id;
        storageManagement.titleOfActiveProject = targetedProject.querySelector('.project-title').textContent;
        storageManagement.descriptionOfActiveProject = targetedProject.querySelector('.project-description').textContent

        if (storageManagement.projectPopOutActive.value === false) {
            document.querySelector('.projects-content').appendChild(projectPopOut());

        }
        updateProjectTasksLS();
    })

    middleContainer.addEventListener('mouseover', () => {
        topContainer.setAttribute('style', 'color: yellow');
        middleContainer.setAttribute('style', 'color: yellow');
    })

    middleContainer.addEventListener('mouseout', () => {
        topContainer.setAttribute('style', 'color: white');
        middleContainer.setAttribute('style', 'color: white');
    })

    middleContainer.addEventListener('click', (e) => {
        const targetedProject = e.target.parentElement.parentElement;
        storageManagement.idOfActiveProject = targetedProject.id;
        storageManagement.titleOfActiveProject = targetedProject.querySelector('.project-title').textContent;
        storageManagement.descriptionOfActiveProject = targetedProject.querySelector('.project-description').textContent

        if (storageManagement.projectPopOutActive.value === false) {
            document.querySelector('.projects-content').appendChild(projectPopOut());
        }
        updateProjectTasksLS();

    })

    cardContainer.append(topContainer, middleContainer, bottomContainer)


    const build = () => {
        document.body.querySelector('.projects-content').appendChild(cardContainer);

    }

    return { build };
}