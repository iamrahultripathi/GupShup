import axios from 'axios';

// const url = 'http://127.0.0.1:4000';
// const url = 'https://gupshup-b13da9f9245f.herokuapp.com';
const url = 'http://13.127.223.83:4000/';

const instance = axios.create({
    baseURL: url,
});

export default instance;