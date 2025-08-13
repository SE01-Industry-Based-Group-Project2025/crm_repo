import React from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Subscription from './Subscription';
import About from './About';
import Contact from './Contact';
import ColorfulTypewriter from "../components/ColorfulTypewriter";

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

        {/* Hero Section */}
        <section className="flex-grow flex flex-col justify-center items-center text-center text-white">

          {/* Replaced typewriter heading with ColorfulTypewriter component */}
          <ColorfulTypewriter text={"Connect smarter, grow faster."} />

          {/* Fade-in Paragraph */}
          <p className="text-lg drop-shadow-sm max-w-xl mb-10 mt-8 opacity-0 animate-fade-in-up delay-1000 whitespace-pre-line">
            We don’t just track customers, we empower connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-20 fade-in-up delay-400">
            <a href="https://zoom.us/join" className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full text-white font-semibold text-base hover:bg-white hover:text-[#0c3a5d] transition duration-300">
              <i className="fas fa-map-marker-alt"></i> Plan your meeting
            </a>
            <a href="#" className="flex items-center justify-center gap-2 border-2 border-white px-6 py-3 rounded-full text-white font-semibold text-base hover:bg-white hover:text-[#0c3a5d] transition duration-300">
              <i className="fas fa-comments"></i> Connect with us
            </a>
          </div>      
        </section>
      </div>

      {/* Additional Sections - Scrollable */}
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
