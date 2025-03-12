/* This is the scripts controls the Request Page screen form */
/* The corresponding CSS is RequestCard CSS and makes calls to the backend*/

import React from 'react';
import RequestCard from '../components/RequestCard'; // Adjust the path if file is elsewhere

const BrowseRequests = () => {
    const requests = [
        { id: 1, title: 'Request 1', description: 'This is the first request.' },
        { id: 2, title: 'Request 2', description: 'This is the second request.' },
    ];

    return (
        <div className="browse-requests">
            {requests.map((request) => (
                <RequestCard
                    key={request.id}
                    title={request.title}
                    description={request.description}
                />
            ))}
        </div>
    );
};

export default BrowseRequests;