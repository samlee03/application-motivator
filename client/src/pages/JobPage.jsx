import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Mascot from '../components/jobs/Mascot'
import FireLogo from "../assets/images/mascot/fire_logo.png"
import SmallJobCard from '../components/jobs/SmallJobCard'
import BigJobCard from '../components/jobs/BigJobCard'
import "../styles/jobs/JobPage.css"
const JobPage = () => {
  // const [jobs, setJobs] = useState(null)
  const [jobs, setJobs] = useState(null);
  const [selected, setSelected] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(null);
  const filterJobs = () => {
    if (!jobs || searchQuery.trim() === '') return jobs;

    return jobs.filter(job => {
      const lowerSearchQuery = searchQuery.toLowerCase();
      return (
        job.job_title.toLowerCase().includes(lowerSearchQuery)
      );
    });
  };
  const handleSearch = () => {
    setFilteredJobs(filterJobs());
  };
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('http://localhost:5000/jobs')
      const data = await response.json();
      setJobs(data.documents);
      setFilteredJobs(data.documents)
    }
    const loadingJobs = setTimeout(() =>{
      fetchJobs();
      console.log(jobs);

    }, 500)
  }, [])
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
              <input type="text" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Job Title, Job Type, Job Level"/>
              <i onClick={handleSearch}>Search</i>
            </div>
            <div className="job-page-results">
              <div className="job-cards-container">
                {filteredJobs.map((e, i) => {
                  return (
                    <div key={i} onClick={() => setSelected(i)}>
                      <SmallJobCard data={e} isSelected={selected == i}/>
                    </div>
                  )
                })}

              </div>
              <div className="job-display">
                <BigJobCard data={filteredJobs[selected]}/>
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