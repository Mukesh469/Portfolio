import React from 'react';
import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6">
          <a
            href="mailto:heyiamfrom2025@gmail.com"
            area-label="send an email"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <FaEnvelope /> <span>heyiamfrom2025@gmail.com</span>
          </a>
          <a
            href="tel:+918527747289"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <FaPhoneAlt /> <span>+91 85277 47289</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-kumar-86a182264/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Mukesh469"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-xs text-gray-500">
            &copy; 2025 Mukesh | Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
