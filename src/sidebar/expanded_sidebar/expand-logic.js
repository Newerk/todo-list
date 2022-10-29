import { sidebarIsExpended } from "../compact_sidebar/compact-sidebar-content";
import { expandSidebar } from "../expanded_sidebar/expand-sidebar";
import { retractExpandedSidebar } from "../expanded_sidebar/retract-sidebar";


export const expandLogic = () => {
    if (sidebarIsExpended === true) {
        retractExpandedSidebar();
    } else {
        expandSidebar();
    }
}