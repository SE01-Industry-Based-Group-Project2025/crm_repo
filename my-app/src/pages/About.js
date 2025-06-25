import React, { useEffect, useState } from "react";

const About = () => {
  // State to trigger fade-slide animation
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add "visible" class after component mounts (like your script)
    setVisible(true);
  }, []);

  return (
    // Background image on body replaced with a div wrapper with bg + blur overlay
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
      style={{
        backgroundImage: "url('about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        id="aboutBox"
        className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-10 rounded-3xl shadow-2xl border border-white/30 bg-gray-900/90 backdrop-blur-lg transition-all duration-1000 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{
          // Smooth fade-slide animation
          transitionProperty: "opacity, transform",
          transitionDuration: "1000ms",
          transitionTimingFunction: "ease",
        }}
      >
        {/* Left side content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 border-b border-cyan-500 pb-2">
            About Our CRM
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Built for performance and clarity, our CRM simplifies customer
            engagement, accelerates sales, and powers business growth — all in
            one secure dashboard.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-cyan-400 text-xl">📊</span>
              <p className="text-gray-300">Powerful analytics to drive strategic decisions.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-cyan-400 text-xl">⚙</span>
              <p className="text-gray-300">Automated workflows that save time and effort.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-cyan-400 text-xl">🔒</span>
              <p className="text-gray-300">Built-in security and scalability for any size.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Right side with about2.jpg background */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 h-full flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('about2.jpg')",
              filter: "brightness(0.5)",
            }}
          ></div>

          {/* Overlay Content */}
          <div className="relative text-center px-6 py-10 text-white z-10">
            <h2 className="text-3xl font-bold mb-3">Empower Your Team</h2>
            <p className="text-gray-200 text-sm max-w-xs mx-auto">
              Our CRM system brings clarity, control, and collaboration into one
              beautifully simple platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
