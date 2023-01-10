import { storageManagement } from "../local-storage";
export const changeBtnBg = () => {

    if (storageManagement.onHomePage.value === true) {
        document.querySelector('#home-side-btn').setAttribute('style', 'opacity: 1;');


    } else {
        document.querySelector('#home-side-btn').setAttribute('style', 'opacity: .4;');

    }

    if (storageManagement.onTodayPage.value === true) {
        document.querySelector('#today-side-btn').setAttribute('style', 'opacity: 1;');

    } else {
        document.querySelector('#today-side-btn').setAttribute('style', 'opacity: .4;');

    }

    if (storageManagement.onUpcomingPage.value === true) {
        document.querySelector('#upcoming-side-btn').setAttribute('style', 'opacity: 1;');

    } else {
        document.querySelector('#upcoming-side-btn').setAttribute('style', 'opacity: .4;');

    }

    if (storageManagement.onPastDuePage.value === true) {
        document.querySelector('#pastdue-side-btn').setAttribute('style', 'opacity: 1;');

    } else {
        document.querySelector('#pastdue-side-btn').setAttribute('style', 'opacity: .4;');

    }

    if (storageManagement.onProjectsPage.value === true) {
        document.querySelector('#projects-side-btn').setAttribute('style', 'opacity: 1;');

    } else {
        document.querySelector('#projects-side-btn').setAttribute('style', 'opacity: .4;');

    }

    if (storageManagement.onAccountPage.value === true) {
        document.querySelector('#account-side-btn').setAttribute('style', 'opacity: 1;');

    } else {
        document.querySelector('#account-side-btn').setAttribute('style', 'opacity: .4;');

    }

    if (storageManagement.onSettingsPage.value === true) {
        document.querySelector('#settings-side-btn').setAttribute('style', 'opacity: 1;');

    } else {
        document.querySelector('#settings-side-btn').setAttribute('style', 'opacity: .4;');

    }


    if (storageManagement.sideBarIsExpanded.value === true) {

        if (storageManagement.onHomePage.value === true) {
            document.querySelector('#home-btn-ex').setAttribute('style', 'background-color: #37373C');


        } else {
            document.querySelector('#home-btn-ex').setAttribute('style', 'background-color: #252526');


        }

        if (storageManagement.onTodayPage.value === true) {
            document.querySelector('#today-btn-ex').setAttribute('style', 'background-color: #37373C');

        } else {
            document.querySelector('#today-btn-ex').setAttribute('style', 'background-color: #252526');

        }

        if (storageManagement.onUpcomingPage.value === true) {
            document.querySelector('#upcoming-btn-ex').setAttribute('style', 'background-color: #37373C');

        } else {
            document.querySelector('#upcoming-btn-ex').setAttribute('style', 'background-color: #252526');

        }

        if (storageManagement.onPastDuePage.value === true) {
            document.querySelector('#pastdue-btn-ex').setAttribute('style', 'background-color: #37373C');

        } else {
            document.querySelector('#pastdue-btn-ex').setAttribute('style', 'background-color: #252526');

        }

        if (storageManagement.onProjectsPage.value === true) {
            document.querySelector('#projects-btn-ex').setAttribute('style', 'background-color: #37373C');

        } else {
            document.querySelector('#projects-btn-ex').setAttribute('style', 'background-color: #252526');

        }

        if (storageManagement.onAccountPage.value === true) {
            document.querySelector('#account-btn-ex').setAttribute('style', 'background-color: #37373C');

        } else {
            document.querySelector('#account-btn-ex').setAttribute('style', 'background-color: #252526');

        }

        if (storageManagement.onSettingsPage.value === true) {
            document.querySelector('#settings-btn-ex').setAttribute('style', 'background-color: #37373C');

        } else {
            document.querySelector('#settings-btn-ex').setAttribute('style', 'background-color: #252526');

        }

    }
}