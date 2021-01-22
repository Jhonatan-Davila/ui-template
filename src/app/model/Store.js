import { createStore, combineReducers } from 'redux';
import navReducer from './NavReducer';

const model = combineReducers({
    nav: navReducer
});
const store = createStore(model);

export default store;
