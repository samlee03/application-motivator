import React from 'react'
import "../../styles/account/SignInOut.css"
function SignInOut() {
  return (
    
        <div className="sign-in-up-content">
          <h1 className="heading">Sign Up</h1>
          <h4>Have an account? <span>Sign In</span> </h4>
          
          <input type="text" placeholder='Enter your email'/>
          <input type="password" placeholder='Create your password' />
          <p>Password must contain:</p>
          <ul>
            <li>1 Capital letter </li>
            <li>1 Special character </li>
            <li>1 Lowercase letter  </li>
            <li>No personal information </li>
          </ul>
        </div>
  )
}

export default SignInOut