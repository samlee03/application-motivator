import React from 'react'
import "../../styles/jobs/BigJobCard.css"
function BigJobCard({data}) {
  const handleApply = async () => {
    const token = localStorage.getItem('accessToken');
    const currentApplicationsResponse = await fetch('http://localhost:5000/api/applications', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const currentApplications = await currentApplicationsResponse.json()
    const isDuplicate = currentApplications.some(
      (application) => application.jobTitle === data.job_title && application.company === data.company
    );
  
    if (isDuplicate) {
      console.log("You've already applied to this job.");
      return;
    }
    const response = await fetch('http://localhost:5000/api/applications', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          jobTitle: data.job_title,
          company : data.company,
          salary: data.salary,
          postDate: data.post_date,
          location: data.location,
        })
      }
    )
    const job_data = await response.json();
    console.log(job_data);
  }


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
              {data.missionStatement? data.missionStatement : `No info`}
            </p>
        </div>
      </div>

      <div>

        </div>
      <button onClick={handleApply} className='apply-button'>Apply</button>
    </div>
  )
}

export default BigJobCard