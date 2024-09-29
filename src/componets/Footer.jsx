import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 mb-5">
            {/* Social Media Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaTwitch size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="row text-center mb-5">
          <div className="col-md-3">
            <Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link><br /><br />
            <Link to="/terms" className="text-white my-4 text-decoration-none">Terms of Service</Link>
          </div>
          <div className="col-md-3">
            <Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link><br /><br />
            <Link to="/support" className="text-white text-decoration-none">Support</Link>
          </div>
          <div className="col-md-3">
            <Link to="/cookie-preferences" className="text-white text-decoration-none">Cookie Preferences</Link><br /><br />
            <Link to="/settings" className="text-white text-decoration-none">Settings</Link>
          </div>
          <div className="col-md-3">
            <Link to="/corporate-info" className="text-white text-decoration-none">Corporate Information</Link><br /><br />
            <Link to="/about" className="text-white text-decoration-none">About Us</Link>
          </div>
        </div>
        <div className="row text-start mt-3 mb-5">
          <div className="col-12">
            <p className="mb-0">&copy; Alkye Test</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
