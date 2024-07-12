// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2024 VocalTech. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-blue-400 transition duration-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;