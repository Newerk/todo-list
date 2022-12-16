import './project-popout-style.css'

export const projectPopOut = () => {
    const container = document.createElement('div');
    container.className = 'project-popout-container';
    container.setAttribute('style', 'position: absolute; width: 60vw; height: 80vh; background-color: orange; z-index: 5; place-self: center; display: grid; grid-template-rows: auto 1fr auto')

    const top = document.createElement('div');
    top.setAttribute('style', 'display: flex; justify-content: space-between; border: 1px solid black;');
    const title = document.createElement('div');
    title.className = 'popout-title';
    title.textContent = 'PROJECT TITLE';
    const exitBtn = document.createElement('button');
    exitBtn.className = 'popout-exit-btn';
    exitBtn.textContent = 'X';

    top.append(title, exitBtn);

    const middle = document.createElement('div');
    middle.setAttribute('style', 'border: 1px solid black; background-color: cyan; display: grid; grid-template-rows: auto 1fr;');
    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.setAttribute('style', 'border: 1px solid black;')
    const descriptionTag = document.createElement('div');
    descriptionTag.textContent = 'Description';
    const description = document.createElement('div');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis purus elit, at finibus turpis fermentum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis sem pretium, posuere ante non, vestibulum eros. Ut mattis dictum neque, sed fringilla turpis imperdiet ut. Maecenas in ligula justo. Nulla vestibulum ligula non justo malesuada, quis auctor est placerat. In hac habitasse platea dictumst. Mauris imperdiet nisi hendrerit tincidunt volutpat. Nunc nisi dolor, rhoncus id tincidunt finibus, eleifend a metus. Pellentesque luctus odio sagittis, consectetur nisi a, sodales lacus. Pellentesque justo ligula, pellentesque quis blandit sed, sodales feugiat neque. Donec eget sapien iaculis sapien porttitor rutrum ut a felis.';

    descriptionWrapper.append(descriptionTag, description);

    const tasksWrapper = document.createElement('div');
    tasksWrapper.setAttribute('style', 'display: grid; grid-template-rows: auto 1fr; border: 3px dotted red; height: 1fr')
    const taskHeader = document.createElement('div');
    taskHeader.setAttribute('style', 'border: 1px solid black; display: flex; justify-content: space-between');
    const taskTag = document.createElement('div');
    taskTag.textContent = 'Tasks';
    const newTaskBtn = document.createElement('button');
    newTaskBtn.textContent = 'NEW TASK';

    taskHeader.append(taskTag, newTaskBtn)


    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('style', 'border: 1px solid black; background-color: white;')

    tasksWrapper.append(taskHeader, taskContainer)
    middle.append(descriptionWrapper, tasksWrapper);

    const bottom = document.createElement('div');
    bottom.setAttribute('style', 'height: auto; width: 100%; border: 1px solid black; display: flex; justify-content: flex-end;');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';

    bottom.append(editBtn);

    container.append(top, middle, bottom);

    return container;
}
