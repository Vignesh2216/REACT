import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './Auth.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/dash'); 
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
