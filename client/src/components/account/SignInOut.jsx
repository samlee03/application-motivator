import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/account/SignInOut.css"
function SignInOut({type}) {
  return (
    
        <div className="sign-in-up-content">
          <h1 className="heading">{type == "sign-up" ? "Sign Up" : "Welcome Back"}</h1>
            {type == "sign-up" ? 
            <h4>Have an account? <Link to="/signin-page" className="link">Sign In</Link> </h4>
            :
            <h4>No account? <Link to="/signup-page" className="link">Sign Up</Link> </h4>
            }

          
          <input type="text" placeholder='Enter your email'/>
          
          <input type="password" placeholder={type == 'sign-in' ? 'Enter your password' : 'Create your password'} />
          {type == "sign-up" ?
            <div className="sign-in-out-block">

              <p>Password must contain:</p>
              <ul>
                <li>1 Capital letter </li>
                <li>1 Special character </li>
                <li>1 Lowercase letter  </li>
                <li>No personal information </li>
              </ul>
              </div>
          : <div className="sign-in-out-block">
              <label className="remember-me"><input type="checkbox"></input>Remember me</label></div> }
          {type == "sign-up" ? 
              <div className="center">
                <button className="orange-button">Create Account</button>
              </div>
            :
              <div className="center">
                <button className="orange-button">Sign In</button>
              </div>
          }
        </div>
  )
}

export default SignInOut