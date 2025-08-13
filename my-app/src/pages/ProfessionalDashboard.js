import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const ProfessionalDashboard = ({ professionalName }) => {
  const [analytics, setAnalytics] = useState({ revenue: 0, customers: 0, growth: 0 });
  const [subscription, setSubscription] = useState({ plan: '', expiry: '' });

  useEffect(() => {
    // Fetch analytics and subscription info from backend (replace with real API)
    setAnalytics({ revenue: 50000, customers: 120, growth: 12 });
    setSubscription({ plan: 'BUSINESS', expiry: '2025-12-31' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">Welcome, {professionalName}!</h1>
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Dashboard</h2>
          <div className="mb-4">
            <span className="font-semibold">Subscription:</span> {subscription.plan} | Expiry: {subscription.expiry}
          </div>
          <h3 className="font-semibold mb-2">Business Analytics</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li><strong>Revenue:</strong> ${analytics.revenue}</li>
            <li><strong>Customers:</strong> {analytics.customers}</li>
            <li><strong>Growth:</strong> {analytics.growth}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
