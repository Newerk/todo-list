/* 
build how the row of a the todo list will look like.

*/

import { content } from "..";

export const todoListRows = () => {
    const row = document.createElement('div');
    row.className = 'row';
    row.setAttribute('style', 'display: grid; grid-template-columns: auto 1fr auto auto; width: 100%; height: 2rem; background-color: white;');

    content.appendChild(row);
}