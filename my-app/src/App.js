import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
// import Login from './pages/Login';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';

// ✅ Use component version of login/signup
import Signup from './components/Signup';
import Login from './pages/Login';
// import Navbar from './components/Navbar'; // 👈 Navbar import is commented out
import Profile from './pages/profile';
import ChatBotWrapper from './components/ChatBotWrapper';

// ✅ Import the new Customers CRUD component
import CustomersCRUDApp from './CustomersCRUDApp';

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');

  // ✅ Only show ChatBot on /profile
  const showChatBot = currentPath === '/profile';

  // ✅ Hide navbar only on login or signup
  const hideNavbar = ['/login', '/signup'].includes(currentPath);

  return (
    <>
      {/* {!hideNavbar && <Navbar />} Navbar usage is also commented out */}
      {showChatBot && <ChatBotWrapper />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/services" element={<Services />} />*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscription" element={<Subscription />} />

        {/* ✅ New route for Customers CRUD */}
        <Route path="/customers" element={<CustomersCRUDApp />} />
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
