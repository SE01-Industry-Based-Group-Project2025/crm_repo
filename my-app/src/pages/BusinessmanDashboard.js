import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const BusinessmanDashboard = () => {
  const [stats] = useState({
    totalRevenue: 125000,
    activeDeals: 24,
    newLeads: 156,
    conversionRate: 23.5
  });

  const handleGeneratePDF = async () => {
    try {
      // Try GET request first (simpler approach)
      let response = await fetch('http://localhost:8080/pdf-demo', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/pdf',
        }
      });

      // If GET fails, fallback to opening in new window
      if (!response.ok) {
        window.open('http://localhost:8080/pdf-demo', '_blank');
        return;
      }
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Business-Dashboard-Report-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Fallback: Open PDF endpoint in new window
      alert('CORS error detected. Opening PDF in new window...');
      window.open('http://localhost:8080/pdf-demo', '_blank');
    }
  };

  const [recentDeals] = useState([
    { id: 1, client: 'Tech Solutions Inc.', value: 45000, status: 'Negotiating', probability: 75 },
    { id: 2, client: 'Global Marketing Co.', value: 32000, status: 'Proposal Sent', probability: 60 },
    { id: 3, client: 'StartUp Ventures', value: 18000, status: 'Closed Won', probability: 100 },
  ]);

  const [monthlyData] = useState([
    { month: 'Jan', revenue: 85000, leads: 120 },
    { month: 'Feb', revenue: 92000, leads: 134 },
    { month: 'Mar', revenue: 78000, leads: 98 },
    { month: 'Apr', revenue: 105000, leads: 156 },
    { month: 'May', revenue: 125000, leads: 189 },
  ]);

  const [upcomingMeetings] = useState([
    { id: 1, client: 'ABC Corporation', time: '10:00 AM', type: 'Sales Call' },
    { id: 2, client: 'XYZ Enterprises', time: '2:00 PM', type: 'Follow-up' },
    { id: 3, client: 'Innovation Hub', time: '4:30 PM', type: 'Presentation' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Business Dashboard</h1>
              <p className="text-gray-600">Track your business performance and manage your deals.</p>
            </div>
            <button 
              onClick={handleGeneratePDF}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate PDF Report
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-800">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Deals</p>
                <p className="text-3xl font-bold text-gray-800">{stats.activeDeals}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">New Leads</p>
                <p className="text-3xl font-bold text-gray-800">{stats.newLeads}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-800">{stats.conversionRate}%</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Deals */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Active Deals Pipeline</h3>
            <div className="space-y-4">
              {recentDeals.map((deal) => (
                <div key={deal.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{deal.client}</h4>
                    <span className="text-lg font-bold text-green-600">${deal.value.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      deal.status === 'Closed Won' 
                        ? 'bg-green-100 text-green-800'
                        : deal.status === 'Negotiating'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {deal.status}
                    </span>
                    <span className="text-sm text-gray-600">{deal.probability}% probability</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${deal.probability}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              View All Deals
            </button>
          </div>

          {/* Upcoming Meetings */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Meetings</h3>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm">{meeting.client}</h4>
                  <p className="text-xs text-gray-600">{meeting.time}</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {meeting.type}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200">
              Schedule Meeting
            </button>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <div className="text-2xl font-bold text-blue-600">
                      ${(data.revenue / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-gray-600">Revenue</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">{data.leads}</div>
                    <div className="text-xs text-gray-600">Leads</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-700">{data.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-200">
              <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Add Lead</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-200">
              <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Create Proposal</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-200">
              <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 8.2l6.9-5.9a2 2 0 011.4-.6H20a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h.7a2 2 0 011.4.6L12 15.2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">View Reports</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-200">
              <svg className="w-8 h-8 text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Manage Team</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessmanDashboard;
