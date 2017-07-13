import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return {
                tasks: action.data.tasks
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    appReducer,
    routing
});

export default rootReducer;
