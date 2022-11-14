import { localStorage } from "../../local-storage";

export const expandedSidebarLogic = () => {
    window.addEventListener('resize', checkSize);

}

function checkSize() {
    const container = document.querySelector('.expanded-container');
    const buttons = document.querySelectorAll('.extended-btns');

    let width = window.innerWidth;

    if (width < 850) {
        container.setAttribute('style', 'width: 0px');
        document.querySelector('#expand-btn').textContent = '>';
        buttons.forEach(el => el.setAttribute('style', 'width: 0px; font-size: 0px; padding: 0px; border: none'));
        localStorage.sideBarIsExpanded.value = false;

    }
}