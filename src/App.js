// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RequestsPage from './pages/RequestsPage';
import ProviderPageView from './components/ProviderPage/ProviderPage';

const App = () => {
  try {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<RequestsPage />} />
        <Route path="/provider" element={<ProviderPageView />} />
      </Routes>
    );
  } catch (error) {
    console.error("Error in App rendering:", error);
    return <div>Error Loading App</div>;
  }
};
export default App;