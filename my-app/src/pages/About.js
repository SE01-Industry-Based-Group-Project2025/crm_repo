import React, { useEffect, useState } from "react";

const About = () => {
  // State to trigger fade-slide animation
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add "visible" class after component mounts (like your script)
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our application! This project is built using <strong>React</strong> and <strong>Tailwind CSS</strong>.
          It demonstrates clean design, component-based structure, routing, and modern web practices. <br /><br />
          We're focused on building fast, responsive, and user-friendly interfaces. This page is just one part of a full
          single-page app with routing powered by <code>react-router-dom</code>.
        </p>
      </div>
    </div>
  );
};

export default About;
