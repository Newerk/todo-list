export const storageManagement = {
    sideBarIsExpanded: { value: false },
    newTaskMenuActive: { value: false },
    filters: {},
}

/*start small, make a function that saves the new tasks added or removed upon refresh. dont worry bout the inforamtion in the todo list
if i add 3 new tasks, they should remain upon refresh*/
export const saveTodoToStorage = (div) => {
document.querySelector('#todo-list-container');
}


const lsObjectTest = {
    key_one : 'one',
    key_two : 'two',
    key_three : 'three'
}

const lsObjectTest_TWO = {
    _key_one : 'one',
    _key_two : 'two',
    _key_three : 'three'
}

// localStorage.setItem('objectTest', JSON.stringify(lsObjectTest));
localStorage.setItem('objectTest_2', JSON.stringify(lsObjectTest_TWO));


