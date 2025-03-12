import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const createRequest = (requestData) => {
    return axios.post(`${API_BASE_URL}/requests`, requestData);
};

export const fetchRequests = () => {
    return axios.get(`${API_BASE_URL}/requests`);
};

export const fetchRequestDetails = (id) => {
    return axios.get(`${API_BASE_URL}/requests/${id}`);
};




