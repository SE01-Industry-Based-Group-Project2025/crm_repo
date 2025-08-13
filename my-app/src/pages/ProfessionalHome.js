import React from 'react';
import { Link } from 'react-router-dom';

function ProfessionalHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-white font-bold text-xl">CRM Pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 bg-white/10 backdrop-blur-lg rounded-full px-8 py-3 border border-white/20">
            <Link to="/professional" className="text-white hover:text-purple-300 transition-all duration-300 font-medium">Home</Link>
            <Link to="/professional/about" className="text-white hover:text-purple-300 transition-all duration-300 font-medium">About</Link>
            <Link to="/professional/contact" className="text-white hover:text-purple-300 transition-all duration-300 font-medium">Contact</Link>
          </div>

          <Link 
            to="/professional/login" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
              Customer Relationships
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Empower your business with intelligent CRM solutions that drive growth, enhance customer satisfaction, and streamline operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/professional/signup" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
            <Link 
              to="/professional/about" 
              className="border-2 border-white/70 hover:border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-white/60 text-sm mb-4">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-16 h-8 bg-white/20 rounded"></div>
              <div className="w-16 h-8 bg-white/20 rounded"></div>
              <div className="w-16 h-8 bg-white/20 rounded"></div>
              <div className="w-16 h-8 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover how our CRM platform transforms customer relationships and drives business growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📊", title: "Advanced Analytics", description: "Get deep insights into your customer behavior and business performance." },
              { icon: "🚀", title: "Automation Tools", description: "Streamline your workflow with intelligent automation features." },
              { icon: "🔒", title: "Enterprise Security", description: "Bank-grade security ensures your customer data is protected." },
              { icon: "🌐", title: "Global Integration", description: "Connect with 500+ business tools and platforms seamlessly." }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "50+", label: "Countries" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfessionalHome;
