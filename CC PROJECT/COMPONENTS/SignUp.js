import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './Auth.css';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault(); 
    navigate('/login'); 
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Join Us Today!</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link> 
        </p>
      </div>
    </div>
  );
}

export default SignUp; 
