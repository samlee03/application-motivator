import React from 'react'
import "../../styles/jobs/SmallJobCard.css"
const SmallJobCard = ({data, isSelected}) => {
  const job = data;
  console.log(job);
  return (
    <div className={`small-job-card ${isSelected ? 'highlighted-card' : ''}`}>
        <div className="job-heading">
            <img src="https://img.freepik.com/premium-vector/job-switch-icon_1178600-10632.jpg"/>
            <h1 className="small-card-title">{job.job_title}</h1>
        </div>
        <p>{job.salary}</p>
        <p>{job.location}</p>
    </div>  
  )
}

export default SmallJobCard