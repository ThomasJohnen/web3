import axios from 'axios';

const baseURL = "http://localhost:3001";

const getAll = () => axios.get(`${baseURL}/jokes`).then(response => response.data);

const get = (id) => axios.get(`${baseURL}/jokes/${id}`).then(response => response.data);

const jokeApi = { getAll, get };

export default jokeApi;

