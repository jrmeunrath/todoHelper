import {
    ADD_TO_DO,
    DELETE_TO_DO,
    DELETE_ALL_TO_DO,
    UPDATE_TO_DO
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
            const newList = state.items ? [...state.items] : [];
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

        case UPDATE_TO_DO:
            const currentItems = [...state.items];
            const itemToUpdate = currentItems.find((item, index) => index === action.itemIndex);
            currentItems.splice(
                action.itemIndex,
                1,
                {
                    ...itemToUpdate,
                    item: action.updatedValue
                }
            );

            return {
                items: currentItems
            }

        case DELETE_TO_DO:
            const newItems = [...state.items];
            newItems.splice(action.itemIndex, 1);

            return {
                items: newItems
            }

        case DELETE_ALL_TO_DO:
            return {
                items: []
            }

        default:
            return state;
    }
};
