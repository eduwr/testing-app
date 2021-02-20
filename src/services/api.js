import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog.cheesecakelabs.com/',
});

export default api;
