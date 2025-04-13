import React from 'react'
import Header from '../components/Header'
import SuggestionBtn from '../components/resource/SuggestionBtn'
import Article from '../components/resource/Article'
import Video from '../components/resource/Video'
import Course from '../components/resource/Course'
import Newsletter from '../components/resource/Newsletter'

import Titles from '../components/home/Titles'

import '../styles/resource/Resource.css'

const ResourcePage = () =>  {
  return (
    <div>

    <Header onPage={"Resource"}/>
    <br/>
    <Titles title="How can we help?" />
    <SuggestionBtn/>
    <Article/>
    <Video/>
    <Course/>
    <Newsletter/>
    
    </div>
  )
}

export default ResourcePage