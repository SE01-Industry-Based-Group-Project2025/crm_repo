import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';

// Original Components
import Signup from './components/Signup';
import Login from './pages/Login';
import Profile from './pages/profile';
import ChatBotWrapper from './components/ChatBotWrapper';


function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');

  // Only show ChatBot on /profile
  const showChatBot = currentPath === '/profile';

  return (
    <>
      {showChatBot && <ChatBotWrapper />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
