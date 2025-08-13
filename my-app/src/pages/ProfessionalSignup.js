import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfessionalSignup() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    plan: ''
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.fName && formData.lName && formData.email;
      case 2:
        return formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
      case 3:
        return formData.role && formData.plan;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch("http://localhost:8083/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.fName,
          lastName: formData.lName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          plan: formData.plan
        }),
      });

      const data = await response.text();
      setMessage(data);

      if (data === "User registered successfully") {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      setMessage("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const plans = [
    {
      name: 'BASIC',
      price: 'Rs. 5,000',
      period: '/month',
      features: ['Access to basic features', 'Email support', 'Single user', '5GB Storage'],
      popular: false
    },
    {
      name: 'PRO',
      price: 'Rs. 7,000',
      period: '/month',
      features: ['All Basic features', 'Priority support', 'Up to 3 users', '50GB Storage', 'Advanced Analytics'],
      popular: true
    },
    {
      name: 'BUSINESS',
      price: 'Rs. 10,000',
      period: '/month',
      features: ['All Pro features', '24/7 Support', 'Unlimited users', '500GB Storage', 'Custom Integrations', 'API Access'],
      popular: false
    }
  ];

  const roles = [
    { value: 'TEACHER', label: 'Teacher', icon: '🎓', description: 'Educational professional' },
    { value: 'BUSINESSMAN', label: 'Business Owner', icon: '💼', description: 'Business professional' }
  ];

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-12">
        <div className="w-full max-w-lg">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Create Account
              </h2>
              <p className="text-white/70 text-lg">
                Join thousands of businesses using CRM Pro
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep >= step ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-white/10 text-white/50'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-8 h-1 rounded transition-all duration-300 ${
                        currentStep > step ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/20'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSignup}>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl min-h-[400px] flex flex-col">
                
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">First Name</label>
                          <input
                            type="text"
                            name="fName"
                            value={formData.fName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-semibold mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lName"
                            value={formData.lName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Password Setup */}
                {currentStep === 2 && (
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-6">Secure Your Account</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            placeholder="Create a strong password"
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
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Confirm Password</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Confirm your password"
                          required
                        />
                      </div>
                      {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                        <p className="text-red-400 text-sm">Passwords do not match</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Role and Plan Selection */}
                {currentStep === 3 && (
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-6">Choose Your Role & Plan</h3>
                    <div className="space-y-6">
                      {/* Role Selection */}
                      <div>
                        <label className="block text-white text-sm font-semibold mb-3">Select Your Role</label>
                        <div className="grid grid-cols-1 gap-3">
                          {roles.map((role) => (
                            <button
                              key={role.value}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, role: role.value }))}
                              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                                formData.role === role.value
                                  ? 'bg-purple-600/20 border-purple-500 text-white'
                                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{role.icon}</span>
                                <div>
                                  <div className="font-semibold">{role.label}</div>
                                  <div className="text-sm opacity-70">{role.description}</div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Plan Selection */}
                      <div>
                        <label className="block text-white text-sm font-semibold mb-3">Select Your Plan</label>
                        <div className="grid grid-cols-1 gap-3 max-h-48 overflow-y-auto">
                          {plans.map((plan) => (
                            <button
                              key={plan.name}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, plan: plan.name }))}
                              className={`p-4 rounded-xl border transition-all duration-300 text-left relative ${
                                formData.plan === plan.name
                                  ? 'bg-purple-600/20 border-purple-500 text-white'
                                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                              }`}
                            >
                              {plan.popular && (
                                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                  Popular
                                </div>
                              )}
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-semibold text-lg">{plan.name}</div>
                                  <div className="text-sm opacity-70">{plan.price}{plan.period}</div>
                                </div>
                              </div>
                              <div className="text-xs opacity-60">
                                {plan.features.slice(0, 2).join(' • ')}
                                {plan.features.length > 2 && ` • +${plan.features.length - 2} more`}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      Previous
                    </button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!validateStep(currentStep)}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isLoading || !validateStep(3)}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 flex items-center space-x-2"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Creating...</span>
                          </>
                        ) : (
                          <span>Create Account</span>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Message Display */}
                {message && (
                  <div className={`mt-4 p-4 rounded-xl text-center text-sm font-medium ${
                    message.includes('successfully') 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <p className="text-white/70">
                Already have an account?{' '}
                <a 
                  href="/login" 
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/signup.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-black/80"></div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-12 text-white">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Start Your
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                  Success Journey
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Join thousands of businesses that trust CRM Pro to manage their customer relationships and drive growth.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {[
                  { icon: "✨", text: "Free 14-day trial" },
                  { icon: "🚀", text: "Setup in under 5 minutes" },
                  { icon: "💬", text: "24/7 expert support" },
                  { icon: "🔒", text: "Enterprise-grade security" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white/90">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSignup;
