import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ItemCreatorReducer } from '../components/ItemCreator/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  todoItems: ItemCreatorReducer
});

export default rootReducer;
