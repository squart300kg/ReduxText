import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';

const allReducers = combineReducers({
    loginReducer,
});

export default allReducers;