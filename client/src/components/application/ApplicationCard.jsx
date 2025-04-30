import React, { useState } from 'react'
import "../../styles/application/ApplicationCard.css"
function ApplicationCard({data, num}) {
  const date = new Date(data.appliedDate);
  const formattedDate = date.toLocaleDateString('en-US');
  const [toggleStatus, setToggleStatus] = useState(true);
  
  return (
    <div className='application-card'>
      <div className='application-top'>
        <div className='application-flex'>
          <div className='application_num'>{num + 1}</div>
          <div className='application-company'>{data.company}</div>
        </div>
        <div onClick={() => setToggleStatus(e => !e)} className={`application-status ${toggleStatus ? 'pending' : 'accepted'}`}>{toggleStatus ? 'pending' : 'accepted'}</div>
      </div>
      <div className='application-title'>
        {data.jobTitle}
      </div>
      <div className='application-details'>Applied {formattedDate}</div>
    </div>
  )
}

export default ApplicationCard