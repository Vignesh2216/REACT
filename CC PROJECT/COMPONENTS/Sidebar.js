import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/campaigns">Campaigns</Link>
      <Link to="/traffic">Traffic</Link>
      <Link to="/performance">Performance</Link>
    </div>
  );
};

export default Sidebar;