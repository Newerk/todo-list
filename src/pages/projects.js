import './page-styling.css'

export const projectsPage = () => {
    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%');
    container.className = 'projects-wrapper';

    const header = document.createElement('div');
    header.className = 'projects-header';

    const projectsContent = document.createElement('div');
    projectsContent.className = 'projects-content';

    container.append(header, projectsContent);

    return container;
}