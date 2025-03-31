import React from 'react'
import "../styles/Header.css"
const Header = () => {
  return (
    <div className="Header">
        <div className="logo">MOTIVATOR</div>
        <div className="navigation-container">
            <button>Home</button>
            <button>Jobs</button>
            <button>Applications</button>
            <button>Resources</button>
            <img className="profile" src="https://placehold.co/45x45/png" />
        </div>
    </div>

  )
}

export default Header