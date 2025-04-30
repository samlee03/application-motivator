import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import "../styles/application/ApplicationPage.css"
import ProgressBar from '../components/application/ProgressBar'
import ApplicationCard from '../components/application/ApplicationCard'
import { Link } from 'react-router-dom'
const ApplicationPage = () =>  {
  const [query, setQuery] = useState('')
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([])
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = () => {
    const filtered = applications.filter((application) =>
      application.jobTitle.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredApplications(filtered); 
  };

  const [level, setLevel] = useState(0);
  const [totalApplications, setTotalApplications] = useState(1);

  // Load User - Applied Applications
  useEffect(() => {
    const getApplications = async () => {
      console.log("fetching");
      const token = localStorage.getItem('accessToken');
      const response = await fetch('http://localhost:5000/api/applications', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      setApplications(data);
      setFilteredApplications(data);

      console.log(data);
    }


    getApplications();
  }, [])

  const [hasMounted, setHasMounted] = useState(false);

  // Level Handler
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  useEffect(() => {
    if (hasMounted && applications.length >= totalApplications) {
      const timeout = setTimeout(() => {
        setLevel(prev => {
          const nextLevel = prev + 1;
          switch (nextLevel) {
            case 1:
              setTotalApplications(3);
              break;
            case 2:
              setTotalApplications(5);
              break;
            case 3:
              setTotalApplications(10);
              break;
            default:
              setTotalApplications(prevTotal => prevTotal + 10);
              break;
          }
          return nextLevel;
        });
      }, 1000);
  
      return () => clearTimeout(timeout);
    }
  }, [applications.length, totalApplications, hasMounted]);
  
  return (
    <div>

      <Header onPage={"Application"}/>
      <div className='application-page'>
        <div className='application-content'>
          <div className='application-progress-bar'>
            <ProgressBar completed={applications.length} total={totalApplications} key={level} />
          </div>
          <div className='level-display'>Level {level}</div>
          <h1>Application Tracker</h1>
          <div className="search-bar">
            <i>Filter</i>
            <input type="text" onChange={handleChange} placeholder="Search Job Title"/>
            <i onClick={handleSearch}>Search</i>
          </div>
        </div>
       </div>
        <div>
          {
            applications.length ==  0 ? <p className='no-applications'>No applications to show. Start applying <Link to='/jobs-page' className='no-application-link'>here!</Link></p> : 
            <div className='applications-display'>
              {filteredApplications.map((application, i) => (
                    <ApplicationCard key={i} num={i} data={application} className='application-card' />
                  ))
              }
            </div>
          }
        </div>
    </div>
  )
}

export default ApplicationPage