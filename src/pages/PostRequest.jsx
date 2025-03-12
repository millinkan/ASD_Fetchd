import React, { useState } from 'react';
//import RequestService from '../services/RequestService';
import '../styles/Home.css';
import '../styles/form.css';
import '../styles/PostRequest.css'
import { createRequest, fetchRequestDetails, fetchRequests } from '../services/RequestService';

function PostRequest() {
    const [formData, setFormData] = useState({
        pickupLocation: "",
        dropoffLocation: "",
        description: "",
    });
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Save the selected file
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare form data for POST request
        const formDataToSend = new FormData();
        formDataToSend.append("pickupLocation", formData.pickupLocation);
        formDataToSend.append("dropoffLocation", formData.dropoffLocation);
        formDataToSend.append("description", formData.description);
        if (file) {
            formDataToSend.append("file", file);
        }

        // Log the form data for development/testing (or integrate your API call here)
        console.log("Form Submitted:", formData.pickupLocation, formData.dropoffLocation, formData.description, file);
        alert("Request submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="post-request-form">
            <h2>Post a Delivery Request</h2>

            {/* Pickup Location Input */}
            <input
                name="pickupLocation"
                placeholder="Pickup Location"
                onChange={handleInputChange}
                value={formData.pickupLocation}
                required
            />

            {/* Drop-off Location Input */}
            <input
                name="dropoffLocation"
                placeholder="Drop-off Location"
                onChange={handleInputChange}
                value={formData.dropoffLocation}
                required
            />

            {/* Description Textarea */}
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
                value={formData.description}
                required
            ></textarea>

            {/* File Upload Input */}
            <input
                type="file"
                onChange={handleFileChange}
                accept=".png,.jpg,.jpeg,.pdf" // Restrict to certain file types
            />

            {/* Submit Button */}
            <button type="submit">Submit Request</button>
        </form>
    );
}

export default PostRequest;