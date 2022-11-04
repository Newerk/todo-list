import { content, sideBarIsExpanded } from "../.."

export const expandedSidebarLogic = () => {
    sideBarIsExpanded.value = true;
    window.addEventListener('resize', checkSize);
}

function checkSize() {
    const container = document.querySelector('.expanded-container');
    const buttons = document.querySelectorAll('.extended-btns');

    let width = window.innerWidth;

  
    if (width < 850) {
        container.setAttribute('style', 'width: 0px');
        buttons.forEach(el => el.setAttribute('style', 'width: 0px; font-size: 0px; padding: 0px; border: none'));
        // content.setAttribute('style', 'grid-template-columns: 1fr;');
        sideBarIsExpanded.value = false;
    }
}