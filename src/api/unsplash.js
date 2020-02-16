import axios from 'axios';

const CLIEN_ID = process.env.REACT_APP_CLIENT_ID;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${CLIEN_ID}`
    }
});

