import axios from 'axios';
import env from '../../build/env';
// import {Message} from 'iview';
// import store form '@/store'

const ajaxUrl = env === 'development'
    ? 'http://accessfbaerp.com/api'
    : env === 'production'
        ? 'http://accessfbaerp.com/api'
        : 'http://accessfbaerp.com/api';

const service = axios.create({
    baseURL: ajaxUrl, // api的baseUrl
    timeout: 5000 // request timeout
});

export default service;
