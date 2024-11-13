import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Link } from 'react-router-dom';
import './Analytics.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Traffic Over Time',
        data: [10, 20, 30, 25, 40, 45, 50],
        fill: false,
        borderColor: '#61dafb', 
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
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].label,
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#fff' 
        },
        grid: {
          color: '#444'
        }
      },
      y: {
        ticks: {
          color: '#fff' 
        },
        grid: {
          color: '#444' 
        }
      }
    }
  };

  return (
    <div className="analytics-container">
      <header className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <p>Analyze your data and track your performance.</p>
      </header>
      <section className="chart-container">
        <Line data={data} options={options} />
      </section>
      <section className="tabs-container">
        <Link to="/dashboard/traffic" className="tab-button">Traffic</Link>
        <Link to="/dashboard/campaigns" className="tab-button">Campaigns</Link>
        <Link to="/dashboard/performance" className="tab-button">Performance</Link>
      </section>
    </div>
  );
};

export default Analytics;