import React, { useState, useEffect } from 'react'
import "../../styles/application/ProgressBar.css"
import Mascot from '../../assets/images/mascot/fire_logo.png'
const ProgressBar = ({completed, total}) => {

    const progressWidth = (completed / total) * 100;
    const maskLeft = (progressWidth - 100) + '%';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
  return (
    <div className="loading-bar-container">
        <div className="loading-bar">
            <div className="progress" style={{width: isLoaded ? `${progressWidth}%` : '0%', transition: 'width 0.75s ease-in-out'}}></div>
            <div className="progress-text">{completed} / {total}</div>
            <img src={Mascot} className="mask" alt="Loading Mask" style={{left: isLoaded ? `${progressWidth}%` : '0%', transition: 'left 0.75s ease-in-out'}}/>
        </div>

    </div>
  )
}

export default ProgressBar