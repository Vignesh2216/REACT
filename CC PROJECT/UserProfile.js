import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/login'); 
  };

  const user = {
    name: "VIGNESH",
    email: "727723EUCS271@SKCET.AC.IN",
    joined: "January 16, 2021",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s", // Placeholder image, replace with actual URL
  };

  return (
    <div className="user-profile-container">
      <header className="user-profile-header">
        <h1>User Profile</h1>
      </header>
      <section className="profile-details">
        <img className="user-avatar" src={user.avatarUrl} alt="User Avatar" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Joined: {user.joined}</p>
        <div className="profile-buttons">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;