import React from 'react'
import Header from '../components/Header'
import Welcome from '../components/home/Welcome'
const Home = () => {
  return (
    <div>

      <Header onPage={"Home"}/>
      <Welcome/>
      <p>About me section</p>
      <p>Reviews ...</p>
      <p>Resources ...</p>
    </div>
  )
}

export default Home