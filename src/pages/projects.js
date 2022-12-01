import './page-styling.css'

export const projectsPage = () => {
    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%');
    container.className = 'projects-container';



    return container;
}