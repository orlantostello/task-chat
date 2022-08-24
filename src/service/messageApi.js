import axios from 'axios';

axios.defaults.baseURL = 'https://api.chucknorris.io';

export const fetchMessage = () => {
  return axios.get('/jokes/random');
};
