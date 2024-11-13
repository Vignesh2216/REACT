import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Digital Marketing Agency</h1>
        <p>Your success is our priority. Let us help you grow your business online.</p>
        <div className="home-buttons">
          <Link to="/login" className="home-btn">Login</Link>
          <Link to="/signup" className="home-btn">Sign Up</Link>
        </div>
      </header>
      <section className="home-dashboard">
        <Link to="/dashboard" className="home-dashboard-link">
          <h2>Dashboard</h2>
          <p>Manage your digital marketing campaigns and track your progress.</p>
        </Link>
      </section>
      <section className="home-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <Link to="/seo">
              <h3>SEO Optimization</h3>
            </Link>
            <p className="service-description">Improve your website's ranking on search engines.</p>
          </div>
          <div className="service-item">
            <Link to="/social-media">
              <h3>Social Media Marketing</h3>
            </Link>
            <p className="service-description">Expand your reach and grow your brand on social media.</p>
          </div>
          <div className="service-item">
            <Link to="/content-creation">
              <h3>Content Creation</h3>
            </Link>
            <p className="service-description">Engage your audience with high-quality content.</p>
          </div>
          <div className="service-item">
            <Link to="/ppc">
              <h3>Pay-Per-Click Advertising</h3>
            </Link>
            <p className="service-description">Drive traffic with targeted PPC campaigns.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;