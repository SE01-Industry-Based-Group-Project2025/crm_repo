// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const userId = 3; // Replace with dynamic user ID later

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8083/api/profile/${userId}`);
        if (response.status === 204) {
          setProfile(null);
          return;
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const pieData = profile
    ? [
        { name: 'Used', value: 10000 - profile.remainingQuota },
        { name: 'Remaining', value: profile.remainingQuota },
      ]
    : [];

  const barData = profile
    ? [
        { name: 'Quota', Used: 10000 - profile.remainingQuota, Remaining: profile.remainingQuota },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">📊 Subscription Dashboard</h2>

        {profile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Profile Info Card */}
            <div className="bg-green-50 border border-green-300 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Your Plan Details</h3>
              <p><strong>Plan:</strong> {profile.plan}</p>
              <p><strong>Remaining Quota:</strong> {profile.remainingQuota} messages</p>
              <p><strong>Expiry Date:</strong> {profile.expiryDate}</p>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-4 rounded-xl shadow-inner">
              <h4 className="text-lg font-semibold text-gray-700 text-center mb-2">Quota Usage (Pie)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-xl shadow-inner mt-6">
              <h4 className="text-lg font-semibold text-gray-700 text-center mb-2">Quota Overview (Bar)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Remaining" stackId="a" fill="#10B981" />
                  <Bar dataKey="Used" stackId="a" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No subscription profile found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
