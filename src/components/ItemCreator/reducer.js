import {
    ADD_TO_DO,
    DELETE_TO_DO
} from './actions';

// Reducer data structure
/*
    items: [
        {
            task: 'Task here'
        }
    ]
*/

export const ItemCreatorReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            const newList = state.items || [];
            const newId = Math.random();

            if (action.newItem) {
                newList.push({
                    id: newId,
                    item: action.newItem
                });
            }

            return {
                items: newList
            };

        case DELETE_TO_DO:
            const newItems = [...state.items];
            newItems.splice(action.itemIndex, 1);

            return {
                items: newItems
            }

        default:
            return state;
    }
};
