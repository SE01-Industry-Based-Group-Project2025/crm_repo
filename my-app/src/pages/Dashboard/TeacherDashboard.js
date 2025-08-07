import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";
import ChatBotWrapper from "../../components/ChatBotWrapper";

function TeacherDashboard() {
  const [engagement, setEngagement] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [chat, setChat] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const searchParams = new URLSearchParams(window.location.search);
  const teacherId = searchParams.get("id");

useEffect(() => {
  if (!teacherId) return;

  fetch(`http://localhost:8083/api/teacher/${teacherId}/engagement`)
    .then(res => res.json())
    .then(setEngagement)
    .catch(err => console.error("Engagement fetch error:", err));

  fetch(`http://localhost:8083/api/teacher/${teacherId}/upcoming-lessons`)
    .then(res => res.json())
    .then(data => setLessons(data.lessons || []))
    .catch(err => console.error("Lessons fetch error:", err));

  fetch(`http://localhost:8083/api/teacher/${teacherId}/chat-activity`)
    .then(res => res.json())
    .then(setChat)
    .catch(err => console.error("Chat fetch error:", err));

  fetch(`  http://localhost:8083/api/teacher/${teacherId}/feedback-summary`)
    .then(res => res.json())
    .then(setFeedback)
    .catch(err => console.error("Feedback fetch error:", err));
}, [teacherId]);

  if (!teacherId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <h2 className="text-xl text-red-600">No teacher ID provided.</h2>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-8 font-sans relative"
      style={{
        backgroundImage: "url('/teacher-bg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/60 z-0" />
      <div className="relative max-w-7xl mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 z-10">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-800 dark:hover:text-white transition"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-300 text-center drop-shadow">
          Teacher Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <StatCard title="Active Students" value={engagement?.activeStudents ?? "--"} />
          <StatCard title="Participation Rate" value={engagement?.participationRate ?? "--"} />
          <StatCard title="Average Quiz Score" value={engagement?.averageQuizScore ?? "--"} />
          <StatCard title="Upcoming Lessons" value={lessons.length}>
            <ul className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {lessons.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </StatCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <StatCard title="Recent Messages" value={chat?.recentMessages ?? "--"} />
          <StatCard title="Unread Messages" value={chat?.unreadMessages ?? "--"} />
          <StatCard title="Chatbot Usage" value={chat?.chatbotUsage ?? "--"} />
          <StatCard title="Feedback Score" value={feedback?.averageFeedbackScore ?? "--"}>
            <div className="text-xs mt-2 text-gray-600 dark:text-gray-300">
              <div>Suggestions: {feedback?.suggestions}</div>
              <div>Recent Comments:</div>
              <ul>
                {feedback?.recentComments?.map((c, i) => <li key={i}>- {c}</li>)}
              </ul>
            </div>
          </StatCard>
        </div>
      </div>
      <ChatBotWrapper />
    </div>
  );
}

export default TeacherDashboard;