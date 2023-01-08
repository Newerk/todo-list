import { storageManagement } from "../local-storage";

export const changeBtnBg = () => {
    if (storageManagement.sideBarIsExpanded.value === true) {


        switch (true) {
            case storageManagement.onHomePage.value:
                document.querySelector('#home-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            case storageManagement.onTodayPage.value:
                document.querySelector('#today-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            case storageManagement.onUpcomingPage.value:
                document.querySelector('#upcoming-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            case storageManagement.onPastDuePage.value:
                document.querySelector('#pastdue-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            case storageManagement.onProjectsPage.value:
                document.querySelector('#projects-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            case storageManagement.onAccountPage.value:
                document.querySelector('#account-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            case storageManagement.onSettingsPage.value:
                document.querySelector('#settings-btn-ex').setAttribute('style', 'background-color: #37373C');

                break;

            default:

        //    .setAttribute('style', 'background-color: #252526')
                break;
        }
    }
}