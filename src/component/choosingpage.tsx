// CenteredImage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './choosingpage.css';  // Import the CSS file
import { FaHome, FaArrowRight, FaInfoCircle } from 'react-icons/fa';  // Import icons
const choose: React.FC = () => {
    return (
        <div className="container">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search..." 
                />
                <button>Search</button>
            </div>
            <div className="content">
                <div className="row">
                    <Link to="/option1" className="row-link">
                        <FaHome className="row-icon" /> Option 1
                    </Link>
                </div>
                <div className="row">
                    <Link to="/option2" className="row-link">
                        <FaInfoCircle className="row-icon" /> Option 2
                    </Link>
                </div>
                <div className="row">
                    <Link to="/option3" className="row-link">
                        <FaArrowRight className="row-icon" /> Option 3
                    </Link>
                </div>
            </div>
            <div className="navigation-buttons">
                <Link to="/" className="nav-button home-button">Home</Link>
                <Link to="/next-page" className="nav-button next-page-button">Next Page</Link>
            </div>
        </div>
    );
};

export default choose;
