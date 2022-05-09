import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://172.31.176.112:3333'
})