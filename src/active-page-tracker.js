import { storageManagement } from "./local-storage";

export const activePageTracker = (activePage) => {

    if (activePage === storageManagement.onHomePage) {
        storageManagement.onHomePage.value = true;

        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;

    }
    if (activePage === storageManagement.onTodayPage) {
        storageManagement.onTodayPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;

    }
    if (activePage === storageManagement.onUpcomingPage) {
        storageManagement.onUpcomingPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onPastDuePage.value = false;

    }

    if (activePage === storageManagement.onPastDuePage) {
        storageManagement.onPastDuePage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;

    }

}
