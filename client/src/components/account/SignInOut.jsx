import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/account/SignInOut.css";
import { registerUser, loginUser } from '../../services/authServices';

function SignInOut({ type }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  
  const [hasCapital, setHasCapital] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (type === 'sign-up') {
      setHasCapital(/[A-Z]/.test(password));
      
      setHasSpecial(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password));
      
      setHasLowercase(/[a-z]/.test(password));
      
      setIsValid(hasCapital && hasSpecial && hasLowercase && password.length >= 8);
    }
  }, [password, hasCapital, hasSpecial, hasLowercase, type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (type === 'sign-up' && !isValid) {
      setError('Please ensure your password meets all requirements.');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      if (type === 'sign-up') {
        await registerUser(email, password);
        navigate('/signin-page');
      } else {
        const response = await loginUser(email, password);
        localStorage.setItem('accessToken', response.accessToken); // adds token to local storage

        navigate('/'); //goes to the dashboard or user profile in the future
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-up-content">
      <h1 className="heading">{type === "sign-up" ? "Sign Up" : "Welcome Back"}</h1>
      
      {type === "sign-up" ? 
        <h4>Have an account? <Link to="/signin-page" className="link">Sign In</Link></h4> :
        <h4>No account? <Link to="/signup-page" className="link">Sign Up</Link></h4>
      }

      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input 
          type="password" 
          placeholder={type === 'sign-in' ? 'Enter your password' : 'Create your password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {type === "sign-up" ? (
          <div className={`sign-in-out-block sign-up-block`}>
            <p>Password must contain:</p>
            <ul>
              <li className={hasCapital ? 'requirement-met' : ''}>
                1 Capital letter {hasCapital && '✓'}
              </li>
              <li className={hasSpecial ? 'requirement-met' : ''}>
                1 Special character {hasSpecial && '✓'}
              </li>
              <li className={hasLowercase ? 'requirement-met' : ''}>
                1 Lowercase letter {hasLowercase && '✓'}
              </li>
              <li className={password.length ? 'requirement-met' : ''}>
                minimum 8 characters {password.length >= 8 && '✓'}
              </li>
              <li>No personal information</li>
            </ul>
          </div>
        ) : (
          <div className={`sign-in-out-block sign-in-block`}>
            <label className="remember-me">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          </div>
        )}
        
        <div className="center">
          <button 
            type="submit" 
            className="orange-button"
            disabled={loading || (type === 'sign-up' && !isValid)}
          >
            {loading 
              ? (type === 'sign-up' ? "Creating..." : "Signing in...") 
              : (type === "sign-up" ? "Create Account" : "Sign In")
            }
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInOut;