import './projects-card.css'
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
    const description = document.createElement('div');
    description.className = 'project-description';
    description.textContent = ls_Description;//perhaps I will add a character limit to the description
    middleContainer.hidden = true;
    middleContainer.setAttribute('style', 'transition: hidden 2s')
    middleContainer.appendChild(description);

    const bottomContainer = document.createElement('div');
    bottomContainer.id = 'card-bottom-container';
    const expandArrow = document.createElement('div');
    expandArrow.className = 'expand-arrow';
    expandArrow.textContent = 'v';
    expandArrow.addEventListener('click', () => {
        if (middleContainer.hidden === true) {
            middleContainer.hidden = false;
            expandArrow.textContent = '^'

        } else {
            middleContainer.hidden = true;
            expandArrow.textContent = 'v'


        }

    })

    if (description.textContent !== '') {
        bottomContainer.appendChild(expandArrow);

    }

    cardContainer.append(topContainer, middleContainer, bottomContainer)


    const build = () => {
        document.body.querySelector('.projects-content').appendChild(cardContainer);

    }

    return { build };
}