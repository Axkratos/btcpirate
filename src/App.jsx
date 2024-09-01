import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home'

import AboutUs from './about';
import PrivacyPolicy from './privacy';
import TermsOfService from './tos';
import Navbar from './Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                
            </Routes>
        </Router>
    );
};

// Define a simple Home component or import it if you have one


export default App;
