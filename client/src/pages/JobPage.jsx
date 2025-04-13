import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Mascot from '../components/jobs/Mascot'
import FireLogo from "../assets/images/mascot/fire_logo.png"
import SmallJobCard from '../components/jobs/SmallJobCard'
import BigJobCard from '../components/jobs/BigJobCard'
import "../styles/jobs/JobPage.css"
const JobPage = () => {
  // const [jobs, setJobs] = useState(null)
  const [jobs, setJobs] = useState("temp")
  
  return (
    <div>
        <Header onPage={"Job"}/>
        {jobs ?
          <div className="jobs-page">
            <div className="jobs-title">
              <img src={FireLogo} />
              <p>Ready. Set. Go!</p>
            </div>
            <div className="search-bar">
              <i>Filter</i>
              <input type="text" placeholder="Search Job Title, Job Type, Job Level"/>
              <i>Search</i>
            </div>
            <div className="job-page-results">
              <div className="job-cards-container">
                <SmallJobCard/>
                <SmallJobCard/>
                <SmallJobCard/>
                <SmallJobCard/>
                <SmallJobCard/>
              </div>
              <div className="job-display">
                <BigJobCard/>
              </div>

            </div>
          </div>
          :
          <div className="jobs-page"> {/* Fetching Jobs */}
            <p>Trust the process!</p>
            <Mascot />
          </div>
        }
    </div>
  )
}

export default JobPage