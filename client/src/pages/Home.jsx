import React from 'react'
import Header from '../components/Header'
import Welcome from '../components/home/Welcome'
import AboutUs from '../components/home/AboutUs'
import Titles from '../components/home/Titles'
import Review from '../components/home/Review'

import Article from '../components/home/Article'
import Newsletter from '../components/resource/Newsletter'

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
      <Article/>
      <img className="section-image" src={Image2}/>
      <Newsletter/>
    </div>
  )
}

export default Home