import React from 'react'
import Header from '../components/Header'
import Welcome from '../components/home/Welcome'
import AboutUs from '../components/home/AboutUs'
import Titles from '../components/home/Titles'
import Review from '../components/home/Review'

import '../styles/home/Home.css'

import Image1 from "../assets/images/brooke-cagle.jpg"
import Image2 from "../assets/images/office-highfive.jpg"
const Home = () => {
  return (
    <div className="Home home-background">

      <Header onPage={"Home"}/>
      <Welcome/>
      <AboutUs />
      <img className="section-image" src={Image1}/>
      <Review/>
      <Titles title="Resources" subtitle="Explore what we have to offer" />
      <p>Resources ...</p>
      <img className="section-image" src={Image2}/>
      <Titles title="Newsletter" subtitle="Never miss an opportunity again" />
      <p>...</p>
    </div>
  )
}

export default Home