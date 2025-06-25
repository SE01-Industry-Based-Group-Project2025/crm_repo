import React, { useEffect, useRef } from 'react';

const Subscription = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Glow effect on hover
    cardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          card.classList.add('hover-glow');
        });
        card.addEventListener('mouseleave', () => {
          card.classList.remove('hover-glow');
        });
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: "url('sub.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="bg-white bg-opacity-0 backdrop-blur-md rounded-3xl border border-[#d4c6f1] shadow-2xl w-full max-w-7xl p-10">
        <h1 className="text-center text-4xl font-bold text-white mb-12 drop-shadow-lg tracking-wide">
          Our Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Basic Plan',
              price: 'Rs. 5,000/month',
              features: ['Access to basic features', 'Email support', 'Single user'],
            },
            {
              title: 'Pro Plan',
              price: 'Rs. 7,000/month',
              features: ['All Basic features', 'Priority support', 'Up to 3 users'],
              highlight: true,
            },
            {
              title: 'Business Plan',
              price: 'Rs. 10,000/month',
              features: ['All Pro features', '24/7 Support', 'Unlimited users'],
            },
          ].map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`card animate-fade bg-white ${
                plan.highlight ? 'bg-opacity-100 scale-105 border-2 border-blue-500 shadow-2xl' : 'bg-opacity-90 shadow-lg'
              } backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center`}
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">{plan.title}</h2>
              <p className="text-[#8b5e3c] text-xl font-bold mb-6">{plan.price}</p>
              <ul className="text-gray-700 space-y-3 text-sm text-center">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Custom styling */}
      <style>{`
        .animate-fade {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
        .animate-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card {
          transition: all 0.3s ease-in-out;
          will-change: transform, box-shadow;
        }
        .hover-glow {
          box-shadow: 0 0 20px rgba(0, 204, 255, 0.3), 0 0 10px rgba(0, 204, 255, 0.2);
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
};

export default Subscription;
