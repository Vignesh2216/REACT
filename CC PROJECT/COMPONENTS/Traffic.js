import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Link } from 'react-router-dom';
import './Traffic.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Traffic = () => {
  const data = {
    labels: ['Organic', 'Paid', 'Referral', 'Social'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [40, 30, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff' 
        }
      }
    }
  };

  return (
    <div className="traffic-container">
      <header className="traffic-header">
        <h1>Traffic Overview</h1>
      </header>
      <section className="chart-container">
        <Pie data={data} options={options} />
      </section>
      <section className="tabs-container">
  <Link to="/dashboard/analytics" className="tab-button">Analytics</Link>
  <Link to="/dashboard/campaigns" className="tab-button">Campaigns</Link>
  <Link to="/dashboard/performance" className="tab-button">Performance</Link>
</section>

    </div>
  );
};

export default Traffic;