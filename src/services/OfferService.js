import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const makeOffer = (offerData) => {
    return axios.post(`${API_BASE_URL}/offers`, offerData);
};