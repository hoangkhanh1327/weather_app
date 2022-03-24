import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/';
const instance = axios.create({ baseURL });

export default instance;
