import React from 'react';
import './RequestCard.css'; // Optional: If CSS file is needed

// Functional Component for RequestCard
const RequestCard = ({ title, description }) => {
    return (
        <div className="request-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default RequestCard;