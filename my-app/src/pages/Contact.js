import React from "react";

const Contact = () => {
  // Tailwind animation keyframes cannot be configured at runtime in React,
  // so you need to add the animation classes via Tailwind config in your project.
  // Here, I'll just use the animation class name "animate-fadeInUp" as is,
  // assuming you have configured tailwind.config.js accordingly.

  return (
    // Background image and overlay handled via inline styles + classes
    <div
      className="min-h-screen font-sans relative"
      style={{
        backgroundImage: "url('contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-black/60 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Content container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-xl w-full text-white animate-fadeInUp relative z-10">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">
            Contact Us
          </h1>

          {/* Description */}
          <p className="text-center mb-8 text-sm text-gray-200">
            Feel free to reach out to us. We're happy to help with any inquiries
            or questions you may have.
          </p>

          {/* Contact Details */}
          <div className="space-y-6 text-base">
            {/* Address */}
            <div className="flex items-center gap-4">
              <svg
                className="w-6 h-6 text-yellow-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22s8-6.5 8-12A8 8 0 104 10c0 5.5 8 12 8 12z"
                />
              </svg>
              <span>Highlevel Road, Maharagama</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <svg
                className="w-6 h-6 text-yellow-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h1.38a1 1 0 01.95.68l1.07 3.2a1 1 0 01-.21.98l-1.2 1.2a16 16 0 006.44 6.44l1.2-1.2a1 1 0 01.98-.21l3.2 1.07a1 1 0 01.68.95V19a2 2 0 01-2 2h-.5C7.5 21 3 13.5 3 8.5V8a2 2 0 010-3z"
                />
              </svg>
              <span>+94 77 123 4567</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <svg
                className="w-6 h-6 text-yellow-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
              <span>hello@companymail.com</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 text-sm text-center text-gray-300">
            &copy; 2025 Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
