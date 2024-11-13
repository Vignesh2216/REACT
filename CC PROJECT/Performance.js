import React from 'react';
import { Link } from 'react-router-dom'; 
import './Performance.css';

const Performance = () => {
  return (
    <div className="performance-container">
      <header className="performance-header">
        <h1>Performance Dashboard</h1>
        <p>Review your performance metrics and insights.</p>
      </header>
      <section className="performance-content">
        <h2>Performance Overview</h2>
        <p>Here's an overview of your performance metrics:</p>
        
        <div className="performance-metrics">
          <div className="metric-card">
            <h3>Total Conversions</h3>
            <p>500</p>
          </div>
          <div className="metric-card">
            <h3>Conversion Rate</h3>
            <p>4.5%</p>
          </div>
          <div className="metric-card">
            <h3>Average Order Value</h3>
            <p>$120</p>
          </div>
          <div className="metric-card">
            <h3>Customer Satisfaction</h3>
            <p>92%</p>
          </div>
        </div>

        <section className="performance-summary">
          <h3>Summary</h3>
          <p>Our performance has been strong this quarter. The total conversions have increased by 20% compared to the previous period. The conversion rate has improved to 4.5%, and the average order value has seen a slight increase. Customer satisfaction remains high at 92%, reflecting the positive impact of our recent initiatives.</p>
        </section>
      </section>
      <section className="tabs-container">
        <Link to="/dashboard/traffic" className="tab-button">Traffic</Link>
        <Link to="/dashboard/campaigns" className="tab-button">Campaigns</Link>
        <Link to="/dashboard/analytics" className="tab-button">Analytics</Link>
      </section>
    </div>
  );
};

export default Performance;