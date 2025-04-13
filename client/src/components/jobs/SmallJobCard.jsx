import React from 'react'
import "../../styles/jobs/SmallJobCard.css"
function SmallJobCard({props}) {
  return (
    <div className="small-job-card">
        <div className="job-heading">
            <img src="https://placehold.co/400"/>
            <h1>Software Engineer</h1>
        </div>
        <p>150k - 350k, Medical 401(k) + 1 benefit</p>
        <p>New York, United States (on-site)</p>
    </div>  
  )
}

export default SmallJobCard