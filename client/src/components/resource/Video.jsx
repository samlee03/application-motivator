import React from 'react'
import Type from '../../components/resource/Type'
import "../../styles/resource/Video.css"

import Image1 from "../../assets/images/resource/videoImg/topInterviewTips.jpg"
import Image2 from "../../assets/images/resource/videoImg/artofNegotiation.jpg"
import Image3 from "../../assets/images/resource/videoImg/effectiveJobSearch.jpg"
import Image4 from "../../assets/images/resource/videoImg/tellAbout.jpg"
import Image5 from "../../assets/images/resource/videoImg/findCareer.jpg"
import Image6 from "../../assets/images/resource/videoImg/honeHabit.jpg"
import Image7 from "../../assets/images/resource/videoImg/play_arrow_filled.svg"
const Video = () => {
  return (
    <div className='video-section'>
        <div className='video-section-header'>
            <Type title="Videos tailored for you"/>
            <Type more="See more"/>
        </div>
        <div className='video-wrapper'>
            <div className='video'>
                <div class='video-img-wrapper'>
                    <img className='video-img' src={Image1} alt="two women sitting across each other"/>
                    <img className='play-logo' src={Image7} alt="play symbol"/>
                </div>
                <Type subtitle="Top Interview Tips & More" description="In this video, we dissect an entire job interview from start to finish"/>
            </div>
            <div className='video'>
                <div class='video-img-wrapper'>
                    <img className='video-img' src={Image2} alt="two raised hands gesturing to a laptop"/>
                    <img className='play-logo' src={Image7} alt="play symbol"/>
                </div>
                <Type subtitle="The Art of Negotiation" description="The blueprint for projecting your value as a candidate"/>
            </div>
            <div className='video'>
                <div class='video-img-wrapper'>
                    <img className='video-img' src={Image3} alt="two people sitting across eatch other with laptops"/>
                    <img className='play-logo' src={Image7} alt="play symbol"/>
                </div>
                <Type subtitle="Effective Job Search Techniques in 2025" description="Navigate the tough market and expand your professional network"/>
            </div>
            <div className='video'>
                <div class='video-img-wrapper'>
                    <img className='video-img' src={Image4} alt="microphone in a recording studio"/>
                    <img className='play-logo' src={Image7} alt="play symbol"/>
                </div>
                <Type subtitle="Tell Me About Yourself" description="Responding to this question can be a pivotal moment to setting a positive start"/>
            </div>
            <div className='video'>
                <div class='video-img-wrapper'>
                    <img className='video-img' src={Image5} alt="two people shaking hands from across the table"/>
                    <img className='play-logo' src={Image7} alt="play symbol"/>
                </div>
                <Type subtitle="How To Find a Career You Genuinely Love" description="It can be daunting to approach your career, so we highlight some tips to help"/>
            </div>
            <div className='video'>
                <div class='video-img-wrapper'>
                    <img className='video-img' src={Image6} alt="a man talking to a women through a laptop"/>
                    <img className='play-logo' src={Image7} alt="play symbol"/>
                </div>
                <Type subtitle="Crucial Habits to Hone" description="Part of the journey is relentless effort, there is no success without failure"/>
            </div>
        </div>
    </div>
  )
}

export default Video