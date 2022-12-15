export const projectPopOut = () => {
    const container = document.createElement('div');
    container.className = 'project-popout-container';
    container.setAttribute('style', 'position: absolute; width: 60vw; height: 80.7%; background-color: orange; z-index: 5; place-self: center')

    const top = '';
        const title = '';
        const exitBtn = '';

    top.append(title, exitBtn);

    const middle = '';
        const descriptionWrapper = '';
            const descriptionTag = '';
            const description = '';
        const tasksWrapper = '';
            const taskheader = '';
                const tasksTag = '';
                const newTaskBtn = '';
            const taskContainer = '';

    middle.append(descriptionWrapper,tasksWrapper);

    const bottom = '';
        const editBtn = '';

    bottom.append(editBtn);

    container.append(top,middle,bottom);

    return container;
}