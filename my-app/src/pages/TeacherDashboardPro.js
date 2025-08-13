import React from 'react';
import Navbar from '../components/Navbar';

const TeacherDashboardPro = () => {
  const teacherName = localStorage.getItem('userName') || 'Teacher';
  // Placeholder data
  const overview = [
    { label: 'Course in Progress', value: 18, color: 'bg-red-100', text: 'text-red-500' },
    { label: 'Course Completed', value: 23, color: 'bg-green-100', text: 'text-green-500' },
    { label: 'Certificates Earned', value: 15, color: 'bg-blue-100', text: 'text-blue-500' },
    { label: 'Community Support', value: 87, color: 'bg-purple-100', text: 'text-purple-500' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col items-center py-8">
        <div className="mb-8">
          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">A</div>
          <div className="mt-2 text-lg font-bold text-gray-700">Academy</div>
        </div>
        <nav className="flex flex-col gap-4 w-full px-6">
          <button className="flex items-center gap-3 py-2 px-4 rounded-lg bg-blue-100 text-blue-700 font-semibold"><span className="material-icons">dashboard</span>Dashboard</button>
          <button className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100"><span className="material-icons">menu_book</span>Courses</button>
          <button className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100"><span className="material-icons">chat</span>Chat</button>
          <button className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100"><span className="material-icons">grade</span>Grades</button>
          <button className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100"><span className="material-icons">event</span>Schedule</button>
          <button className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-100"><span className="material-icons">settings</span>Settings</button>
        </nav>
        <div className="mt-auto w-full px-6">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-bold mt-8">Subscribe</button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <Navbar />
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Hello {teacherName} <span className="inline-block">👋</span></h2>
            <p className="text-gray-500">Let's learn something new today!</p>
          </div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search" className="px-4 py-2 border rounded-lg" />
            <button className="p-2 bg-gray-100 rounded-full"><span className="material-icons">notifications</span></button>
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">T</div>
          </div>
        </div>
        {/* Overview Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {overview.map((item, idx) => (
            <div key={idx} className={`rounded-xl p-6 shadow ${item.color}`}>
              <div className={`text-3xl font-bold ${item.text}`}>{item.value}</div>
              <div className="text-gray-600 mt-2">{item.label}</div>
            </div>
          ))}
        </div>
        {/* Placeholder for charts, assignments, events, etc. */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6 min-h-[200px]">[Actively Hours Chart]</div>
          <div className="bg-white rounded-xl shadow p-6 min-h-[200px]">[Performance Chart]</div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow p-6 min-h-[200px]">[My Assignments]</div>
          <div className="bg-white rounded-xl shadow p-6 min-h-[200px]">[Upcoming Events]</div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboardPro;
