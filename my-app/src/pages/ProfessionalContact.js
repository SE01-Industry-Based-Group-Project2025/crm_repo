import React, { useState, useEffect } from "react";

const ProfessionalContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    subject: 'general'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        subject: 'general'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "Visit Our Office",
      details: ["Highlevel Road, Maharagama", "Sri Lanka 10280"],
      link: "https://maps.google.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: "Call Us",
      details: ["+94 77 123 4567", "+94 11 234 5678"],
      link: "tel:+94771234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Email Us",
      details: ["hello@crmcompany.com", "support@crmcompany.com"],
      link: "mailto:hello@crmcompany.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      link: null
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "You can start using our CRM platform immediately after signing up. Our onboarding process takes less than 15 minutes."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we provide custom integrations with most business tools and can build bespoke solutions for enterprise clients."
    },
    {
      question: "What support do you provide?",
      answer: "We offer 24/7 support for all paid plans, including live chat, email support, and phone support for enterprise customers."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-grade encryption and are SOC 2 compliant. Your data is stored securely and never shared with third parties."
    }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative"
      style={{
        backgroundImage: "url('contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-black/80"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Conversation</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your customer relationships? We're here to help you every step of the way. 
              Reach out to our team and discover how our CRM solution can drive your business forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                    <p className="text-white/70">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="general" className="bg-slate-800">General Inquiry</option>
                        <option value="sales" className="bg-slate-800">Sales</option>
                        <option value="support" className="bg-slate-800">Technical Support</option>
                        <option value="partnership" className="bg-slate-800">Partnership</option>
                        <option value="demo" className="bg-slate-800">Request Demo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your needs and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Contact Methods */}
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl group-hover:bg-purple-600/30 transition-colors duration-300">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                        {method.details.map((detail, idx) => (
                          <p key={idx} className="text-white/70 mb-1">{detail}</p>
                        ))}
                        {method.link && (
                          <a 
                            href={method.link}
                            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                          >
                            Contact Now →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Interactive Map</h3>
                  <p className="text-white/70 text-sm">Click to view our location on Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={`mt-20 transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Quick answers to common questions about our CRM platform and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust our CRM platform to drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalContact;
