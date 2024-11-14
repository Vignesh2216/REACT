import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Link } from 'react-router-dom'; 
import './Campaigns.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Campaigns = () => {
  const data = {
    labels: ['Campaign A', 'Campaign B', 'Campaign C', 'Campaign D'],
    datasets: [
      {
        label: 'Campaign Performance',
        data: [65, 59, 80, 81],
        backgroundColor: '#61dafb', 
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
    <div className="campaigns-container">
      <header className="campaigns-header">
        <h1>Campaigns Dashboard</h1>
        <p>Track your marketing campaigns and their performance.</p>
      </header>
      <section className="chart-container">
        <Bar data={data} options={options} />
      </section>
      <section className="tabs-container">
        <Link to="/dashboard/traffic" className="tab-button">Traffic</Link>
        <Link to="/dashboard/analytics" className="tab-button">Analytics</Link>
        <Link to="/dashboard/performance" className="tab-button">Performance</Link>
      </section>
    </div>
  );
};

export default Campaigns;