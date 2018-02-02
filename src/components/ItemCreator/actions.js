import { createSelector } from 'reselect';
import deep from 'deep-get-set';

export const ADD_TO_DO = 'ADD_TO_DO';
export const UPDATE_TO_DO = 'UPDATE_TO_DO';
export const DELETE_TO_DO = 'DELETE_TO_DO';
export const DELETE_ALL_TO_DO = 'DELETE_ALL_TO_DO';

export function addTodoItem(newItem) {
    return {
        type: ADD_TO_DO,
        newItem
    }
};

export function updateTodoItem(itemIndex, updatedValue) {
    return {
        type: UPDATE_TO_DO,
        itemIndex,
        updatedValue
    }
};

export function deleteTodoItem(itemIndex) {
    return {
        type: DELETE_TO_DO,
        itemIndex
    }
};

export function deleteAllItems(itemIndex) {
    return {
        type: DELETE_ALL_TO_DO
    }
};

export const getTodoList = createSelector(
    state => deep(state, 'todoItems.items') || [],
    todoItems => todoItems
);
