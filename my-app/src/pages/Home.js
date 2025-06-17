import React, { useState } from 'react';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 px-6">
        {/* Dark mode button in top-right */}
        <div className="flex justify-end pt-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Centered content */}
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-300 mb-6">
            Welcome to CRM Home Page
          </h1>
          <p className="text-lg max-w-xl">
            This is your main landing page built with <strong>React</strong> and styled with <strong>Tailwind CSS</strong>.
            The chatbot is ready in the corner to assist your visitors!
          </p>
          <a
            href="/profile"
            className="mt-8 inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
