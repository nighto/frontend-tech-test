import * as types from './types';

export function getTasks(data) {
    return {
        type: types.GET_TASKS,
        data,
    };
}

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
