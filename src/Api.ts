import axios from 'axios';

const api = {
  postSomething: async (something: String) => {
    return axios.post('/somewhere', { something });
  },
  getSomething: async () => {
    return await axios.get('/somewhere');
  },
};

export default api;
