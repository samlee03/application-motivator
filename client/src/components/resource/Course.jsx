import React from 'react'
import Type from '../../components/resource/Type'
import "../../styles/resource/Course.css"

import Image1 from "../../assets/images/resource/videoImg/play_arrow_filled.svg"
import Image2 from "../../assets/images/resource/course/interview.jpg"
import Image3 from "../../assets/images/resource/course/careerDev.jpg"
import Image4 from "../../assets/images/resource/course/resumeRev.jpg"
import Image5 from "../../assets/images/resource/course/technical.jpg"

const Course = () => {
  return (
    <div className='course-section'>
        <div className='course-section-header'>
            <Type title="Courses related to your career"/>
            <Type more="See more"/>
        </div>
        <div className='course-wrapper'>
            <div className='course'>
                <div className='course-img-wrapper'>
                    <img className='course-img' src={Image2} alt="two people conversing behind a glass window"/>
                    <div className='course-detail'>
                        <p className='course-category'>Interview</p>
                        <div className='course-title'>
                            <Type subtitle="Job Interview Skills Training"/>
                            <img className='go-icon' src={Image1}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='course'>
                <div className='course-img-wrapper'>
                    <img className='course-img' src={Image3} alt=""/>
                    <div className='course-detail'>
                        <p className='course-category'>Career</p>
                        <div className='course-title'>
                            <Type subtitle="Career Development: Your Brand, Plain & Simple"/>
                            <img className='go-icon' src={Image1}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='course'>
                <div className='course-img-wrapper'>
                    <img className='course-img' src={Image4} alt=""/>
                    <div className='course-detail'>
                        <p className='course-category'>Resume</p>
                        <div className='course-title'>
                            <Type subtitle="Highlighting Relevant Skills for Your Career"/>
                            <img className='go-icon' src={Image1}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='course'>
                <div className='course-img-wrapper'>
                    <img className='course-img' src={Image5} alt=""/>
                    <div className='course-detail'>
                        <p className='course-category'>Technical</p>
                        <div className='course-title'>
                            <Type subtitle="Recruitment Tools for Difficult Times"/>
                            <img className='go-icon' src={Image1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course