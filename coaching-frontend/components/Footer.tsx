import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ivy M Coaching. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
