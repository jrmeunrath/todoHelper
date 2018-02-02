
export const ADD_TO_DO = 'ADD_TO_DO';
export const DELETE_TO_DO = 'DELETE_TO_DO';

export function addTodoItem(newItem) {
    return {
        type: ADD_TO_DO,
        newItem
    }
}

export function deleteTodoItem(itemIndex) {
    return {
        type: DELETE_TO_DO,
        itemIndex
    }
}
