import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full">
              {/* Logo */}
              <span className="text-white font-bold">CD</span>
            </div>
            <h1 className="text-xl font-semibold">Car Doctor</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial...
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* About Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Why Car Doctor
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
