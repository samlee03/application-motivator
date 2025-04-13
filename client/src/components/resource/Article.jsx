import React from 'react'
import Type from '../../components/resource/Type'
import "../../styles/resource/Article.css"

import Image1 from "../../assets/images/resource/article/resume-genuis.jpg"
import Image2 from "../../assets/images/resource/article/interview-tips.jpg"
import Image3 from "../../assets/images/resource/article/network-excel.jpg"
const Article = () => {
  return (
    <div className='article-section'>
        <div className='article-section-header'>
            <Type title="Articles others found helpful"/>
            <Type more="See more"/>
        </div>
        <div className='article-wrapper'>
            <div className='article'>
                <img className='article-img' src={Image1} alt="Image of a recruiter examining a resume"/>
                <Type subtitle="Craft the Perfect Resume" description="Key words to include in your resume to make it standout to hiring managers"/>
            </div>
            <div className='article'>
                <img className='article-img' src={Image2} alt="Image of two women in an interviewing"/>
                <Type subtitle="Ace Your Next Interview" description="Proven strategies to confidently answer tough interview questions"/>
            </div>
            <div className='article'>
                <img className='article-img' src={Image3} alt="Image of two men sitting and chatting"/>
                <Type subtitle="Impact of Networking" description="Effective networking tips to sell yourself effortlessly"/>
            </div>
        </div>
    </div>
  )
}

export default Article