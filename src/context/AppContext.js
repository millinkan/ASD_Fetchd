// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [requests, setRequests] = useState([]); // All requests
	const [completedRequests, setCompletedRequests] = useState([]); // Completed requests for providers
	const [updatedRequests, setUpdatedRequests] = useState([]); // Updated requests for providers

	return (
		<AppContext.Provider
			value={{
				requests,
				setRequests,
				completedRequests,
				setCompletedRequests,
				updatedRequests,
				setUpdatedRequests,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);