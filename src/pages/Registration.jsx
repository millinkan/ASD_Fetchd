import React, { useState } from "react";
import "../styles/Registration.css";

function Register() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password match
        if (formDetails.password !== formDetails.confirmPassword) {
            return alert("Passwords do not match!");
        }

        // Handle registration (API Call can be added here)
        console.log("Submitted Registration Details:", formDetails);
        alert("Registration successful!");
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                {/* Name input */}
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleInputChange}
                    value={formDetails.name}
                    required
                />
                {/* Email input */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={formDetails.email}
                    required
                />
                {/* Password input */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={formDetails.password}
                    required
                />
                {/* Confirm Password input */}
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
                    value={formDetails.confirmPassword}
                    required
                />
                {/* Register button */}
                <button type="submit">Register</button>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </form>
        </div>
    );
}

export default Register;