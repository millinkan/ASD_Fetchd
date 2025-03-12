import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle login - replace with your API call
        console.log("Submitted Login Credentials:", credentials);
        alert("Login successful!");
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {/* Email input */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={credentials.email}
                    required
                />
                {/* Password input */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={credentials.password}
                    required
                />
                {/* Login button */}
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </form>
        </div>
    );
}

export default Login;