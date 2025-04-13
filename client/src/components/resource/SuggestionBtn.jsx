import React from 'react'

import "../../styles/resource/SuggestionBtn.css"
const SuggestionBtn = () => {
  return (
    <div className='suggestion-section'>
        <div className="suggestion-button">
            Resume Review
        </div>
        <div className="suggestion-button">
            Interview Practice
        </div>
        <div className="suggestion-button">
            Technical Assessments
        </div>
        <div className="suggestion-button">
            Networking
        </div>
    </div>
  )
}

export default SuggestionBtn