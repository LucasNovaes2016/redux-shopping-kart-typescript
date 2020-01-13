import { combineReducers } from 'redux';
import shoppingReducer from './shoppingreducer';

export default combineReducers({
  shopping: shoppingReducer,
});