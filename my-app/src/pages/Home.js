import React from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Subscription from './Subscription';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div className="bg-[#0c3a5d] min-h-screen">
      {/* 🔘 Dark mode toggle 
      <div className="flex justify-end pt-4 pr-4">
        <DarkModeToggle />
      </div>*/}

      {/* Background Image Container */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-6 py-8 flex flex-col"
        style={{ backgroundImage: "url('home.jpg')" }}
      >
        {/* Navbar */}
        <header className="max-w-7xl w-full mx-auto fade-in-up delay-100 flex justify-center items-center gap-10">
          <nav className="flex gap-6 bg-white rounded-full px-8 py-3 shadow-lg text-sm md:text-base">
            <a href="/" className="text-black font-bold hover:text-[#0c3a5d] transition">Home</a>
            <a href="#subscription" className="text-black font-bold hover:text-[#0c3a5d] transition">Subscriptions</a>
            <a href="#about" className="text-black font-bold hover:text-[#0c3a5d] transition">About us</a>
            <a href="#contact" className="text-black font-bold hover:text-[#0c3a5d] transition">Contact Us</a>
          </nav>
          <a href="/login" className="bg-white rounded-full px-8 py-3 shadow-lg text-black font-bold hover:text-[#0c3a5d] transition text-sm md:text-base whitespace-nowrap">
            LOGIN
          </a>
        </header>

        {/* Centered content */}
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-300 mb-6">
            Welcome to CRM Home Page
          </h1>
          <p className="text-lg drop-shadow-sm max-w-xl mb-10 fade-in-up delay-300">
            We don’t just track customers, we empower connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 fade-in-up delay-400">
            <a href="#" className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full text-white font-semibold text-base hover:bg-white hover:text-[#0c3a5d] transition duration-300">
              <i className="fas fa-map-marker-alt"></i> Plan your project
            </a>
            <a href="#" className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full text-white font-semibold text-base hover:bg-white hover:text-[#0c3a5d] transition duration-300">
              <i className="fas fa-comments"></i> Connect with us
            </a>
          </div>
        </section>
      </div>

      {/* 🔻 Additional Sections - Scrollable */}
      <section id="subscription"><Subscription /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>

      {/* Custom animation styles */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}

export default Home;
