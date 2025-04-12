import React from 'react'
import { Link } from 'react-router-dom';

import "../../styles/home/Welcome.css"
const Welcome = () => {
  return (
    <div className="Welcome">
        <div className="welcome-container">
            <h2 className="welcome-title">Welcome to your professional growth</h2>
            <div className="end">
                <Link to="/signup-page" className="orange-button">Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome