import axios from 'axios';

const api = axios.create({
  baseURL: 'https://qr-challenge.herokuapp.com/api/',
});

export default api;
