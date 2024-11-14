import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage your digital marketing campaigns and track your progress.</p>
        <Link to="/home" className="home-button">Home</Link>
      </header>
      <div className="dashboard-content">
        <Link to="/dashboard/analytics" className="dashboard-card">
          <h2>Analytics</h2>
          <p>View detailed analytics and insights.</p>
        </Link>
        <Link to="/dashboard/campaigns" className="dashboard-card">
          <h2>Campaigns</h2>
          <p>Manage and track your marketing campaigns.</p>
        </Link>
        <Link to="/dashboard/traffic" className="dashboard-card">
          <h2>Traffic</h2>
          <p>Monitor your website traffic and sources.</p>
        </Link>
        <Link to="/dashboard/performance" className="dashboard-card">
          <h2>Performance</h2>
          <p>Analyze the performance of your campaigns.</p>
        </Link>
        <Link to="/dashboard/user-profile" className="dashboard-card">
          <h2>User Profile</h2>
          <p>Manage your account and profile settings.</p>
        </Link>
      </div>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Your Digital Marketing Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;