import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID yZ8Gje-D6DtgYXuEKSj8tMqsc4vnfRSal8AbPcTEPRg'
    }
});