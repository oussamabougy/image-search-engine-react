import axios from 'axios';

const CLIEN_ID = "//Put your ClientID here";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${CLIEN_ID}`
    }
});

