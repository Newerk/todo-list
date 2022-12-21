import { storageManagement } from "./local-storage";

export const activePageTracker = (activePage) => {

    if (activePage === storageManagement.onHomePage) {
        storageManagement.onHomePage.value = true;

        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;
        storageManagement.onProjectsPage.value = false;
        storageManagement.onAccountPage.value = false;
        storageManagement.onSettingsPage.value = false;


    }
    if (activePage === storageManagement.onTodayPage) {
        storageManagement.onTodayPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;
        storageManagement.onProjectsPage.value = false;
        storageManagement.onAccountPage.value = false;
        storageManagement.onSettingsPage.value = false;


    }
    if (activePage === storageManagement.onUpcomingPage) {
        storageManagement.onUpcomingPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onPastDuePage.value = false;
        storageManagement.onProjectsPage.value = false;
        storageManagement.onAccountPage.value = false;
        storageManagement.onSettingsPage.value = false;


    }
    if (activePage === storageManagement.onPastDuePage) {
        storageManagement.onPastDuePage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onProjectsPage.value = false;
        storageManagement.onAccountPage.value = false;
        storageManagement.onSettingsPage.value = false;


    }
    if (activePage === storageManagement.onProjectsPage) {
        storageManagement.onProjectsPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;
        storageManagement.onAccountPage.value = false;
        storageManagement.onSettingsPage.value = false;


    }
    if (activePage === storageManagement.onAccountPage) {
        storageManagement.onAccountPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;
        storageManagement.onSettingsPage.value = false;
        storageManagement.onProjectsPage.value = false;


    }
    if (activePage === storageManagement.onSettingsPage) {
        storageManagement.onSettingsPage.value = true;

        storageManagement.onHomePage.value = false;
        storageManagement.onTodayPage.value = false;
        storageManagement.onUpcomingPage.value = false;
        storageManagement.onPastDuePage.value = false;
        storageManagement.onAccountPage.value = false;
        storageManagement.onProjectsPage.value = false;


    }

    return activePage.value;
}
