import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return {
                ...state,
                tasks: action.data.tasks,
            };
        case types.SHOW_NEW_TASK:
            return {
                ...state,
                showNewTask: true,
            };
        case types.HIDE_NEW_TASK:
            return {
                ...state,
                showNewTask: false,
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
