import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const TeacherDashboard = () => {
  const [stats] = useState({
    totalStudents: 245,
    activeClasses: 12,
    completedLessons: 89,
    upcomingClasses: 5
  });

  const [subscriptionInfo] = useState({
    packageName: 'Professional Teacher Plan',
    maxStudents: 300,
    registeredStudents: 245,
    remainingSlots: 55,
    packageExpiry: '2025-12-31',
    daysLeft: 142,
    subscriptionStatus: 'Active'
  });

  const [videos, setVideos] = useState([
    { id: 1, title: 'Introduction to Algebra', subject: 'Mathematics', duration: '25 min', uploadDate: '2025-08-10', views: 45 },
    { id: 2, title: 'Physics Lab Demo', subject: 'Physics', duration: '18 min', uploadDate: '2025-08-09', views: 32 },
    { id: 3, title: 'Chemical Reactions', subject: 'Chemistry', duration: '22 min', uploadDate: '2025-08-08', views: 28 },
  ]);

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: '',
    subject: '',
    duration: '',
    file: null
  });

  const availablePackages = [
    { name: 'Basic Teacher Plan', maxStudents: 100, price: '$29/month', features: ['Basic video hosting', 'Email support'] },
    { name: 'Professional Teacher Plan', maxStudents: 300, price: '$59/month', features: ['HD video hosting', 'Priority support', 'Analytics'] },
    { name: 'Premium Teacher Plan', maxStudents: 500, price: '$99/month', features: ['4K video hosting', '24/7 support', 'Advanced analytics', 'Custom branding'] },
  ];

  const handleGeneratePDF = async () => {
    try {
      // Prepare data to send to PDF service
      const dashboardData = {
        teacherInfo: {
          name: "Teacher Dashboard Report",
          generatedAt: new Date().toLocaleDateString(),
        },
        subscription: {
          packageName: subscriptionInfo.packageName,
          maxStudents: subscriptionInfo.maxStudents,
          registeredStudents: subscriptionInfo.registeredStudents,
          remainingSlots: subscriptionInfo.remainingSlots,
          daysLeft: subscriptionInfo.daysLeft,
          packageExpiry: subscriptionInfo.packageExpiry,
          status: subscriptionInfo.subscriptionStatus
        },
        statistics: {
          totalClasses: stats.activeClasses,
          completedLessons: stats.completedLessons,
          upcomingClasses: stats.upcomingClasses
        },
        classes: recentClasses,
        assignments: assignments
      };

      // Try GET request first (simpler approach)
      let response = await fetch('http://localhost:8080/pdf-demo', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/pdf',
        }
      });

      // If GET fails, try POST with no-cors mode
      if (!response.ok) {
        // Open PDF in new window as fallback
        const pdfUrl = `http://localhost:8080/pdf-demo?data=${encodeURIComponent(JSON.stringify(dashboardData))}`;
        window.open(pdfUrl, '_blank');
        return;
      }
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Teacher-Dashboard-Report-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Fallback: Open PDF endpoint in new window
      alert('CORS error detected. Opening PDF in new window...');
      const fallbackUrl = 'http://localhost:8080/pdf-demo';
      window.open(fallbackUrl, '_blank');
    }
  };

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.subject && newVideo.duration) {
      const video = {
        id: videos.length + 1,
        title: newVideo.title,
        subject: newVideo.subject,
        duration: newVideo.duration,
        uploadDate: new Date().toISOString().split('T')[0],
        views: 0
      };
      setVideos([...videos, video]);
      setNewVideo({ title: '', subject: '', duration: '', file: null });
      setShowVideoModal(false);
      alert('Video uploaded successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handlePackageChange = (packageName) => {
    alert(`Package change to ${packageName} initiated. You will be redirected to payment processing.`);
    setShowPackageModal(false);
    // Here you would integrate with payment processing
  };

  const [recentClasses] = useState([
    { id: 1, subject: 'Mathematics', time: '10:00 AM', students: 25, status: 'Ongoing' },
    { id: 2, subject: 'Physics', time: '2:00 PM', students: 18, status: 'Scheduled' },
    { id: 3, subject: 'Chemistry', time: '4:00 PM', students: 22, status: 'Scheduled' },
  ]);

  const [assignments] = useState([
    { id: 1, title: 'Algebra Problems', dueDate: '2025-08-05', submissions: 20, total: 25 },
    { id: 2, title: 'Physics Lab Report', dueDate: '2025-08-07', submissions: 15, total: 18 },
    { id: 3, title: 'Chemical Equations', dueDate: '2025-08-10', submissions: 8, total: 22 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Teacher Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your teaching overview.</p>
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
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Registered Students</p>
                <p className="text-3xl font-bold text-gray-800">{subscriptionInfo.registeredStudents}</p>
                <p className="text-xs text-blue-600">of {subscriptionInfo.maxStudents} allowed</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Available Slots</p>
                <p className="text-3xl font-bold text-gray-800">{subscriptionInfo.remainingSlots}</p>
                <p className="text-xs text-green-600">students remaining</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Classes</p>
                <p className="text-3xl font-bold text-gray-800">{stats.activeClasses}</p>
                <p className="text-xs text-purple-600">currently running</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Subscription Days</p>
                <p className="text-3xl font-bold text-gray-800">{subscriptionInfo.daysLeft}</p>
                <p className="text-xs text-orange-600">days remaining</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Overview Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg text-white p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Subscription Overview</h2>
            <div className="flex items-center gap-3">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                subscriptionInfo.subscriptionStatus === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {subscriptionInfo.subscriptionStatus}
              </span>
              <button 
                onClick={() => setShowPackageModal(true)}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
              >
                Change Package
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{subscriptionInfo.packageName}</h3>
              <p className="text-blue-100">Current Plan</p>
            </div>
            
            <div className="text-center">
              <div className="mb-2">
                <span className="text-3xl font-bold">{subscriptionInfo.registeredStudents}</span>
                <span className="text-blue-200">/{subscriptionInfo.maxStudents}</span>
              </div>
              <p className="text-blue-100">Students Registered</p>
              <div className="w-full bg-blue-400 rounded-full h-2 mt-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(subscriptionInfo.registeredStudents / subscriptionInfo.maxStudents) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-blue-200 mt-1">
                {subscriptionInfo.remainingSlots} slots available
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-2">
                <span className="text-3xl font-bold">{subscriptionInfo.daysLeft}</span>
              </div>
              <p className="text-blue-100">Days Remaining</p>
              <p className="text-sm text-blue-200">Expires: {subscriptionInfo.packageExpiry}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Classes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Classes</h3>
            <div className="space-y-4">
              {recentClasses.map((classItem) => (
                <div key={classItem.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{classItem.subject}</h4>
                    <p className="text-sm text-gray-600">{classItem.time} • {classItem.students} students</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    classItem.status === 'Ongoing' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {classItem.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              View All Classes
            </button>
          </div>

          {/* Video Library */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Video Library</h3>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition duration-200"
              >
                Add Video
              </button>
            </div>
            <div className="space-y-4">
              {videos.map((video) => (
                <div key={video.id} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.subject} • {video.duration}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">Uploaded: {video.uploadDate}</span>
                    <span className="text-xs text-blue-600">{video.views} views</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200">
              Manage All Videos
            </button>
          </div>

          {/* Assignments */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Assignments</h3>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{assignment.title}</h4>
                    <span className="text-xs text-gray-500">Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {assignment.submissions}/{assignment.total} submissions
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-200">
              Create New Assignment
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-200">
              <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Start Class</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-200">
              <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Add Student</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-200">
              <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Grade Papers</span>
            </button>
            
            <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-200">
              <svg className="w-8 h-8 text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 8.2l6.9-5.9a2 2 0 011.4-.6H20a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h.7a2 2 0 011.4.6L12 15.2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Resources</span>
            </button>
          </div>
        </div>

        {/* Video Upload Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Upload New Video</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
                  <input
                    type="text"
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter video title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    value={newVideo.subject}
                    onChange={(e) => setNewVideo({...newVideo, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English">English</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    value={newVideo.duration}
                    onChange={(e) => setNewVideo({...newVideo, duration: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 25 min"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video File</label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setNewVideo({...newVideo, file: e.target.files[0]})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAddVideo}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Upload Video
                </button>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Package Change Modal */}
        {showPackageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-4xl max-w-4xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Package</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {availablePackages.map((pkg, index) => (
                  <div key={index} className={`border-2 rounded-xl p-6 ${
                    pkg.name === subscriptionInfo.packageName 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}>
                    <div className="text-center mb-4">
                      <h4 className="text-xl font-bold text-gray-800">{pkg.name}</h4>
                      <p className="text-2xl font-bold text-blue-600 mt-2">{pkg.price}</p>
                      <p className="text-gray-600">Up to {pkg.maxStudents} students</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {pkg.name === subscriptionInfo.packageName ? (
                      <button className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg" disabled>
                        Current Plan
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePackageChange(pkg.name)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        {pkg.maxStudents > subscriptionInfo.maxStudents ? 'Upgrade' : 'Downgrade'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowPackageModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
