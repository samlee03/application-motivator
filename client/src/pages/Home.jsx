import React from 'react'
import Header from '../components/Header'
import Welcome from '../components/home/Welcome'
import AboutUs from '../components/home/AboutUs'
import Titles from '../components/home/Titles'

import '../styles/home/Home.css'

import Image1 from "../assets/images/brooke-cagle.jpg"
const Home = () => {
  return (
    <div className="Home home-background">

      <Header onPage={"Home"}/>
      <Welcome/>
      <AboutUs />
      <img className="section-image" src={Image1}/>
      <Titles title="Reviews" subtitle="What our users has to say" />
      <Titles title="Resources" subtitle="Explore what we have to offer" />
      <p>Resources ...</p>
    </div>
  )
}

export default Home