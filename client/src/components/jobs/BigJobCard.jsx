import React from 'react'
import "../../styles/jobs/BigJobCard.css"
function BigJobCard({data}) {
  return (
    <div className="big-job-card">
      <div className='big-job-card-content'>

        <div className="job-heading">
            <img src="https://placehold.co/400"/>
            <h1>{data.job_title}</h1>
        </div>
        {data.salary != "N/A" ? <p>Salary: {data.salary}</p> : <p><i>No salary provided</i></p>}
        <h3>Benefits</h3>
        <ul>
          {data.benefits != 'N/A' && data.benefits.map((e, i) => {
            return <li>{e}</li>
          })}
        </ul>
        {data.benefits == 'N/A' && <i>No benefits</i>}
        <h3>Qualifications</h3>
        <ul>
          {data.qualifications != 'N/A' && data.qualifications.map((e, i) => {
            return <li>{e}</li>
          })}
        </ul>
        {data.qualifications == 'N/A' && <i>No qualifications</i>}
        <p>New York, United States (on-site)</p>
        <h2>About the job</h2>
        <div className="big-job-card-description">
            <p>
            Figma is growing our team of passionate people on a mission to make design accessible to all. Born on the Web, Figma helps entire product teams brainstorm, design and build better products — from start to finish.
            </p>
        </div>
      </div>

      <div>
        <button className='apply-button'>Apply</button>

      </div>
    </div>
  )
}

export default BigJobCard