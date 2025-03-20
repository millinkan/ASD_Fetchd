// src/pages/RequestsPage.js
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import MapView from '../components/MapView/MapView';

const RequestsPage = () => {
	const { requests, setRequests } = useAppContext();

	// Fetch the requests from the backend
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/requests'); // API endpoint for requests
				const data = await response.json();
				setRequests(data);
			} catch (err) {
				console.error('Error fetching requests:', err);
			}
		};
		fetchData();
	}, [setRequests]);

	const handleNewRequest = (formData) => {
		// Handle submission of a new request
		console.log('Create New Request', formData);
		// Save to backend using service
	};

	const handleProvideDelivery = (formData) => {
		// Handle a "Provide Delivery" action
		console.log('Provide Delivery', formData);
		// Save to backend using service
	};

	return (
		<div>
			<h1>Requests Page</h1>
			<MapView
				requests={requests}
				handleNewRequest={handleNewRequest}
				handleProvideDelivery={handleProvideDelivery}
			/>
		</div>
	);
};

export default RequestsPage;