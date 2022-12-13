import './projects-card.css'
// the cards that will be build when a user creates a new project

export const projectsCard = () => {

    const cardContainer = document.createElement('div');
    cardContainer.className = 'projects-card-container'

    const topContainer = document.createElement('div');
    topContainer.id = 'card-top-container';

    const middleContainer = document.createElement('div');;
    middleContainer.id = 'card-middle-container';

    const bottomContainer = document.createElement('div');;
    bottomContainer.id = 'card-bottom-container';

    cardContainer.append(topContainer, middleContainer, bottomContainer)

    return cardContainer;

}