export const newTaskBtn = () => {
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('style', 'display: flex; width: 7rem');
    const symbol = document.createElement('div');//when adding the assets, perhaps I will remove this and use ::before in CSS. I will keep this variable here for reference
    symbol.textContent = '+';
    symbol.setAttribute('style', 'background-color: orange; border-radius: 50%; width: 1.5rem; height: auto;text-align: center;')

    const newTask = document.createElement('div');
    newTask.textContent = 'New Task';

    btnContainer.appendChild(symbol);
    btnContainer.appendChild(newTask);

    return btnContainer
}
