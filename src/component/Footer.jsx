import React from "react";
import { logo } from "../assets/index";

const Footer = () => {
  return (
    <div className="px-20 py-5">
      <footer className="">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mr-10">
              <div className="flex items-center mb-2">
                <img src={logo} alt="Logo" className=" h-20 w-25 mr-2" />
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Subscribe to our newsletter for the latest features and updates
                delivered to you.
              </p>
              <form className="flex gap-1">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="flex-grow p-2 border border-gray-300 rounded-l-md text-sm focus:outline-none"
                />
                <button className="bg-[#FF3E54] text-white px-4 py-2  text-sm ">
                  Join
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you accept our Privacy Policy and agree to
                receive updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Useful Links
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#home" className="hover:text-gray-900">
                    Home Page
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-gray-900">
                    Blog Posts
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-gray-900">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Resources
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#help" className="hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#guide" className="hover:text-gray-900">
                    User Guide
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-gray-900">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="hover:text-gray-900">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-gray-900">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#facebook" className="hover:text-gray-900">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#instagram" className="hover:text-gray-900">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#twitter" className="hover:text-gray-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#linkedin" className="hover:text-gray-900">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#youtube" className="hover:text-gray-900">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
            <p>&copy; 2025 do List. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-gray-900">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
