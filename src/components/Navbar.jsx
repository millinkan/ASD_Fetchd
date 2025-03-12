import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/* Put Logo Here*/

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">fetch’d</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/post-request">Post a Request</Link>
                <Link to="/browse-requests">Browse Requests</Link>
                <Link to="/my-deliveries">My Deliveries</Link>
            </div>
            <div className="navbar-auth">
                <button>Login</button>
                <button>Register</button>
            </div>
        </nav>
    );
};

export default Navbar;