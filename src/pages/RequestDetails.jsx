/* This is the scripts controls the Request details form */
/* The corresponding CSS is RequestDetails CSS */

import React from 'react';
import '../styles/Card.css';

const RequestCard = ({ request }) => {
    return (
        <div className="card">
            <img src={request.image} alt={request.title} className="card-image" />
            <div className="card-content">
                <h3>{request.title}</h3>
                <p>{request.description}</p>
                <p><b>Pickup:</b> {request.pickupLocation}</p>
                <p><b>Drop-off:</b> {request.dropoffLocation}</p>
                <button>Make an Offer</button>
            </div>
        </div>
    );
};

export default RequestCard;