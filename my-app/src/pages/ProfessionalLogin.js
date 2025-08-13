import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfessionalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      if (email === "admin1@gmail.com" && password === "admin01") {
        // Admin login
        setMessage("Welcome Admin! Redirecting...");
        setTimeout(() => {
          window.location.href = "http://localhost:8083/";
        }, 1500);
        return;
      }

      const response = await fetch("http://localhost:8083/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text();
      const trimmedData = data.trim().toLowerCase();
      setMessage(data);

      if (trimmedData === "login successful") {
        setTimeout(() => navigate('/profile'), 1500);
      }

    } catch (error) {
      setMessage("Login failed. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/new home.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-black/80"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-bounce"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-12 text-white">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Welcome Back to
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                    CRM Pro
                  </span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  Manage your customer relationships with powerful AI-driven insights and streamlined workflows.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  { icon: "📊", text: "Advanced Analytics Dashboard" },
                  { icon: "🚀", text: "Automated Workflows" },
                  { icon: "🔒", text: "Enterprise-Grade Security" },
                  { icon: "🌐", text: "Global Integration Support" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white/90">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm mb-4">Trusted by 10,000+ businesses worldwide</p>
                <div className="flex space-x-4 opacity-60">
                  <div className="w-12 h-6 bg-white/20 rounded"></div>
                  <div className="w-12 h-6 bg-white/20 rounded"></div>
                  <div className="w-12 h-6 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-12">
        <div className="w-full max-w-md">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo for mobile */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">CRM Pro</h2>
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Welcome Back
              </h2>
              <p className="text-white/70 text-lg">
                Sign in to access your dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                        </svg>
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/40 hover:text-white/60 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/>
                          </svg>
                        ) : (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
                      />
                      <label htmlFor="remember" className="ml-2 text-sm text-white/70">
                        Remember me
                      </label>
                    </div>
                    <button 
                      type="button"
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Message Display */}
                  {message && (
                    <div className={`p-4 rounded-xl text-center text-sm font-medium ${
                      message.includes('successful') || message.includes('Welcome') 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {message}
                    </div>
                  )}
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-white/70">
                  Don't have an account?{' '}
                  <a 
                    href="/signup" 
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
                  >
                    Sign up now
                  </a>
                </p>
              </div>

              {/* Demo Credentials */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center">
                <p className="text-white/60 text-sm mb-2">Demo Credentials:</p>
                <p className="text-white/80 text-xs">
                  Admin: admin1@gmail.com / admin01
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalLogin;
