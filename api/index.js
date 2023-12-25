import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.43.172:8000/api' });