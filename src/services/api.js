// src/services/api.js
import axios from 'axios';

const API = axios.create({
	baseURL: 'https://your-backend-api.com', // Replace with your backend URL
});

// Fetch all active requests
export const fetchRequests = () => API.get('/requests');

// Create a new request
export const createRequest = (formData) => API.post('/requests', formData);

// Fetch completed requests (for providers)
export const fetchCompletedRequests = () => API.get('/requests/completed');

// Fetch updated requests (for providers)
export const fetchUpdatedRequests = () => API.get('/requests/updated');

// Offer a delivery
export const offerDelivery = (formData) => API.post('/requests/offer', formData);