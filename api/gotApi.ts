import axios from 'axios';

const gotApi = axios.create({
  baseURL: 'https://thronesapi.com/api/v2'
});

export default gotApi;