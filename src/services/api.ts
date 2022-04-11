import axios from 'axios';

export const REQUEST_TIMEOUT = 90 * 1000;
const APIKit = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: REQUEST_TIMEOUT,
});
APIKit.defaults.headers.common['Authorization'] =
  process.env.REACT_APP_API_KEY || '';
console.log(process.env.REACT_APP_API_KEY);
export default APIKit;
