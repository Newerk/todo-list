import './home.css'
import { content } from ".."
import { newTaskBtn } from "./new-task-btn"

export const homePage = () => {
/*
add a resize observer that will collaspe the right side of hte homepage 
if the page gets too small( it should then reappear with its contents once the page is large enough). 
the projects on the left hand find will transistion from 2 columns to one of the page is small enough, 
but not too small that it collapse the right side
*/


    // newTaskBtn(); will be used as argument for appending child to the proper div
    const container = document.createElement('div');
    container.setAttribute('style', 'height: 100%; width: 100%; display: grid; grid-template-columns: 1fr .5fr')
    const homeLeft = document.createElement('div');
    homeLeft.className = 'home-left';
    const homeRight = document.createElement('div');
    homeRight.className = 'home-right';

    container.appendChild(homeLeft);
    container.appendChild(homeRight);


content.appendChild(container);

}