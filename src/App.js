/* This is the router file.All files are to be added here */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostRequest from './pages/PostRequest';
import BrowseRequests from './pages/BrowseRequests';
import RequestDetails from './pages/RequestDetails';
import MyDeliveries from './pages/MyDeliveries';
import './styles/global.css';
import Login from "./pages/Login";
import Register from "./pages/Registration";


function App() {
    return (
        <Router>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post-request" element={<PostRequest />} />
                    <Route path="/browse-requests" element={<BrowseRequests />} />
                    <Route path="/request-details/:id" element={<RequestDetails />} />
                    <Route path="/my-deliveries" element={<MyDeliveries />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;