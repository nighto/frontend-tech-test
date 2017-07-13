import axios from 'axios';

const SERVER_URL = 'http://localhost:9001';

const defaultErrorFunction = error => {
    // TODO treat loading error
    throw error;
    // return console.log(error);
};

const api = {
    getTasks(callback) {
        axios
            .get(`${SERVER_URL}/tasks`)
            .then((response) => {
                callback(response.data);
            })
            .catch(defaultErrorFunction)
        ;
    },

    getTask(data, callback) {
        axios
            .get(`${SERVER_URL}/task/${data.id}`)
            .then((response) => {
                callback(response.data);
            })
            .catch(defaultErrorFunction)
        ;
    },

    editTask(data, callback) {
        axios
            .put(`${SERVER_URL}/task/update/${data.id}/${data.title}/${data.description}`)
            .then((response) => {
                callback(response.data);
            })
            .catch(defaultErrorFunction)
        ;
    },

    addTask(data, callback) {
        axios
            .post(`${SERVER_URL}/task/create/${data.title}/${data.description}`)
            .then((response) => {
                callback(response.data);
            })
            .catch(defaultErrorFunction)
        ;
    },

    removeTask(data, callback) {
        axios
            .delete(`${SERVER_URL}/task/delete/${data.id}`)
            .then((response) => {
                callback(response.data);
            })
            .catch(defaultErrorFunction)
        ;
    },
};

export default api;
