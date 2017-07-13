import axios from 'axios';

const SERVER_URL = 'http://localhost:9001';

const api = {
    getTasks(callback) {
        axios
            .get(SERVER_URL + '/tasks')
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                // TODO treat loading error
                throw error;
                // return console.log(error);
            })
        ;
    }
};

export default api;
