import React from 'react'
import "../../styles/jobs/BigJobCard.css"
function BigJobCard() {
  return (
    <div className="big-job-card">
        <div className="job-heading">
            <img src="https://placehold.co/400"/>
            <h1>Software Engineer</h1>
        </div>
        <p>150k - 350k, Medical 401(k) + 1 benefit</p>
        <p>New York, United States (on-site)</p>
        <h3>About the job</h3>
        <div className="big-job-card-description">
            <p>
            Figma is growing our team of passionate people on a mission to make design accessible to all. Born on the Web, Figma helps entire product teams brainstorm, design and build better products — from start to finish.
            </p>
        </div>
    </div>
  )
}

export default BigJobCard