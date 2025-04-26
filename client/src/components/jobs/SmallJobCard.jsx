import React from 'react'
import "../../styles/jobs/SmallJobCard.css"
const SmallJobCard = ({data}) => {
  const job = data;
  console.log(job);
  return (
    <div className="small-job-card">
        <div className="job-heading">
            <img src="https://placehold.co/400"/>
            <div>
              <h1 className="small-card-title">{job.job_title}</h1>
            </div>
        </div>
        <p>{job.salary}</p>
        <p>{job.location}</p>
    </div>  
  )
}

export default SmallJobCard