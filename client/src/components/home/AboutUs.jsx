import React from 'react'
import Titles from './Titles'
import "../../styles/home/AboutUs.css"
const AboutUs = () => {
  return (
    <div className='about-us-section'>
        <Titles title="About us" subtitle="Our mission and services" />
        <div className="about-us-wrapper">
            <p className="about-us-info">Empowering job seekers by providing personalized tools, resources, and encouragement to stay motivated, focused, and resilient throughout their job search journey.</p>

        </div>
    </div>
  )
}

export default AboutUs