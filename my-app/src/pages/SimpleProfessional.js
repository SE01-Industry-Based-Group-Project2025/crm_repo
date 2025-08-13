import React from 'react';
import { Link } from 'react-router-dom';

function SimpleProfessional() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">CRM Pro - Professional</h1>
        
        <nav className="mb-8">
          <div className="flex justify-center space-x-6">
            <Link to="/professional" className="text-purple-300 hover:text-white">Home</Link>
            <Link to="/professional/about" className="text-purple-300 hover:text-white">About</Link>
            <Link to="/professional/contact" className="text-purple-300 hover:text-white">Contact</Link>
            <Link to="/professional/login" className="text-purple-300 hover:text-white">Login</Link>
            <Link to="/professional/signup" className="text-purple-300 hover:text-white">Signup</Link>
          </div>
        </nav>

        <div className="text-center">
          <h2 className="text-2xl mb-4">Welcome to CRM Pro</h2>
          <p className="text-lg mb-8">Transform your customer relationships with our professional CRM solution.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p>Advanced customer insights</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Automation</h3>
              <p>Streamline your workflows</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p>Enterprise-grade protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleProfessional;
