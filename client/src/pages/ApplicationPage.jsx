import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import "../styles/application/ApplicationPage.css"
import ProgressBar from '../components/application/ProgressBar'
import { Link } from 'react-router-dom'
const ApplicationPage = () =>  {
  const [query, setQuery] = useState('')
  const [applications, setApplications] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  const handleSearch = (e) => {
    //
  }


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
      
      console.log(data);
    }
    getApplications();
  }, [])

  
  return (
    <div>

      <Header onPage={"Application"}/>
      <div className='application-page'>
        <div className='application-content'>
          <div className='application-progress-bar'>
            <ProgressBar completed="2" total="3" />
          </div>
          <h1>Application Tracker</h1>
          <div className="search-bar">
            <i>Filter</i>
            <input type="text" onChange={handleChange} placeholder="Search Job Title"/>
            <i onClick={handleSearch}>Search</i>
          </div>
          <div className='applications-display'>
            {
              applications.length ==  0 ? <p className='no-applications'>No applications to show. Start applying <Link to='/jobs-page' className='no-application-link'>here!</Link></p> : 
              <div>
                All applications here..
              </div>
            }
          </div>
        </div>
    </div>
    </div>
  )
}

export default ApplicationPage