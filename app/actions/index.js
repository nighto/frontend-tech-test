import * as types from './types';

export function getTasks(data) {
    return {
        type: types.GET_TASKS,
        data,
    };
}

export function doShowNewTask() {
    return {
        type: types.SHOW_NEW_TASK,
    };
}

export function doHideNewTask() {
    return {
        type: types.HIDE_NEW_TASK,
    };
}

// boilerplate
export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
