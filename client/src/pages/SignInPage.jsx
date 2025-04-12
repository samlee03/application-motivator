import React from 'react'
import Header from '../components/Header'
import "../styles/account/SignUpPage.css"

import SignInOut from '../components/account/SignInOut'
import Image from "../assets/images/account/three-people.jpg"
const SignInPage = () => {
  return (
    <>
      <Header />
      <div className="sign-up-page">
        <img src={Image} />
        <div>
          <SignInOut type="sign-in" />
        </div>
      </div>
    </>
  )
}

export default SignInPage