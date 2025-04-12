import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header = ({onPage}) => {
  return (
    <div className="Header">
        <div className="logo">MOTIVATOR</div>
        <div className="navigation-container">
            <Link to="/" className={`nav-button ${onPage =="Home" ? "blue" : ""}`}>
                Home
            </Link>
            <Link to="/jobs-page" className={`nav-button ${onPage =="Job" ? "blue" : ""}`}>
                Jobs
            </Link>
            <Link to="/applications-page" className={`nav-button ${onPage =="Application" ? "blue" : ""}`}>
                Applications
            </Link>
            <Link to="/resources-page" className={`nav-button ${onPage =="Resources" ? "blue" : ""}`}>
                Resources
            </Link>
            <img className="profile" src="https://placehold.co/45x45/png" alt="Profile" />
        </div>
    </div>
  );
};

export default Header;
