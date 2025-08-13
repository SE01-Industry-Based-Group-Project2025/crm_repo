import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProfessionalHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Professional <span className="text-indigo-600">Dashboards</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your professional workflow with our specialized dashboards designed for 
            educators and business professionals.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Teacher Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  <path d="M12 7c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
                </svg>
                <div>
                  <h2 className="text-3xl font-bold">Teacher Dashboard</h2>
                  <p className="text-blue-100">Online Education Management</p>
                </div>
              </div>
              <p className="text-blue-100 text-lg">
                Manage your online classes, track student progress, and organize educational content efficiently.
              </p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Features Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Student Progress Tracking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Class Schedule Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Assignment & Grading Tools
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Resource Library Management
                  </li>
                </ul>
              </div>
              
              <Link 
                to="/teacher-dashboard" 
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition duration-200"
              >
                Access Teacher Dashboard
              </Link>
            </div>
          </div>

          {/* Business Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v10h-2V7z"/>
                  <path d="M15 9h2v8h-2V9zM7 11h2v6H7v-6z"/>
                </svg>
                <div>
                  <h2 className="text-3xl font-bold">Business Dashboard</h2>
                  <p className="text-green-100">Sales & CRM Management</p>
                </div>
              </div>
              <p className="text-green-100 text-lg">
                Track sales performance, manage customer relationships, and drive business growth.
              </p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Features Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Sales Pipeline Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Lead Tracking & Conversion
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Revenue Analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Meeting & Task Management
                  </li>
                </ul>
              </div>
              
              <Link 
                to="/business-dashboard" 
                className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition duration-200"
              >
                Access Business Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-6">
              Choose the dashboard that fits your professional needs and start managing your work more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/teacher-dashboard" 
                className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                I'm an Educator
              </Link>
              <Link 
                to="/business-dashboard" 
                className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
              >
                I'm in Business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHub;
