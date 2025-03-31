import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
        <div className="logo">MOTIVATOR</div>
        <div className="navigation-container">
            <Link to="/" className="nav-button">
                Home
            </Link>
            <Link to="/jobs-page" className="nav-button">
                Jobs
            </Link>
            <Link to="/applications-page" className="nav-button">
                Applications
            </Link>
            <Link to="/" className="nav-button">
                Resources
            </Link>
            <img className="profile" src="https://placehold.co/45x45/png" alt="Profile" />
        </div>
    </div>
  );
};

export default Header;
