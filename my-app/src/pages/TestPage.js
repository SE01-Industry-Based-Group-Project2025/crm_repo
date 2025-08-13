import React from 'react';

function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">✅ Professional Pages Working!</h1>
        <p className="text-xl mb-8">This is a test to confirm the routing is working correctly.</p>
        <div className="space-y-4">
          <a href="/professional" className="block bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition">
            Go to Professional Home
          </a>
          <a href="/professional/about" className="block bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition">
            Go to Professional About
          </a>
          <a href="/professional/contact" className="block bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition">
            Go to Professional Contact
          </a>
          <a href="/professional/login" className="block bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition">
            Go to Professional Login
          </a>
          <a href="/professional/signup" className="block bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition">
            Go to Professional Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
