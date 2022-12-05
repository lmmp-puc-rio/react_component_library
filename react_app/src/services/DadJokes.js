// Import axios from specific API definition
import axios from "./apis/dadJokesAPI";


// GET Method Request for DadJokes API
const getDadJokesRequest = {
    axiosInstance: axios,
    method: 'GET',
    url: '/',
    requesConfig: {
        headers: {
            'Content-Language': 'en-US'
        }
    }
};

export {
    getDadJokesRequest,

};