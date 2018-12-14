import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.xsrfCookieName = 'csrftoken'
const api = axios.create({
  baseURL: process.env.API_URL + '/',
});


global.api = api;

global.api_origin = axios.create({
  baseURL: ''
});
