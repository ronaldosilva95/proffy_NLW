import axios from 'axios';

const api = axios.create({
    /*baseURL: '8x-ep5.anonymous.mobile.exp.direct:3333'*/
    baseURL: 'http://192.168.0.106:3333'
});

export default api;