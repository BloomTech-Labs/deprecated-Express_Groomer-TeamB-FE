import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/typicode/demo/db',
});

export default instance;
