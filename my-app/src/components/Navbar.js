import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-300">
          MyApp
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home</Link>
          
          <Link to="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
            About</Link>

          <Link to="/services"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Services</Link>

          <Link to="/contact"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
