import React from 'react'
import Header from '../components/Header'
import SuggestionBtn from '../components/resource/SuggestionBtn'
import Article from '../components/resource/Article'
import Video from '../components/resource/Video'

import Titles from '../components/home/Titles'

const ResourcePage = () =>  {
  return (
    <div>

    <Header onPage={"Resource"}/>
    <Titles title="How can we help?" />
    <SuggestionBtn/>
    <Article/>
    <Video/>
    
    </div>
  )
}

export default ResourcePage