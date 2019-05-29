import axios from 'axios';

const CLIEN_ID = "46634118ca225818c968411911ca812b5b7db9001a02ed704af3abc81254af53";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${CLIEN_ID}`
    }
});

