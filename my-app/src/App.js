import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Profile from './pages/profile';
import ChatBotWrapper from './components/ChatBotWrapper';

function AppContent() {
  const location = useLocation();

  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');

  // ✅ Only show ChatBot on /profile (normalized check)
  const showChatBot = currentPath === '/profile';

  // ✅ Hide navbar only on login or signup
  const hideNavbar = ['/login', '/signup'].includes(currentPath);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {showChatBot && <ChatBotWrapper />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
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
