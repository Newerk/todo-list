export const projectPopOut = () => {
    const container = document.createElement('div');
    container.className = 'project-popout-container';
    container.setAttribute('style', 'position: absolute; width: 60vw; height: 80.7%; background-color: orange; z-index: 5; place-self: center')

    return container;
}