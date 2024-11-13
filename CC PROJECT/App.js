import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import SEO from './Components/SEO';
import SocialMedia from './Components/SocialMedia';
import ContentCreation from './Components/ContentCreation';
import PPC from './Components/PPC';
import Dashboard from './Components/Dashboard';
import Analytics from './Components/Analytics';
import Campaigns from './Components/Campaigns';
import Traffic from './Components/Traffic';
import Performance from './Components/Performance';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/ppc" element={<PPC />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/campaigns" element={<Campaigns />} />
        <Route path="/dashboard/traffic" element={<Traffic />} />
        <Route path="/dashboard/performance" element={<Performance />} />
        <Route path="/dashboard/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
