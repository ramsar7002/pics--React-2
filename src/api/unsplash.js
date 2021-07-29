import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization: 'Client-ID sKxg1O6mwFGLwwoRNfbpgfJ2dylvTlUo_jpitAAiMrs',
  },
});
