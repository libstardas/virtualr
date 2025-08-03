import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const openInstagram = () => {
    window.open("https://www.instagram.com/ojaantricjajabor", "_blank");
  };
  const openFacebook = () => {
    window.open("https://www.facebook.com/OjaantricJajabor", "_blank");
  };

  return (
    <div className="bg-gray-800 p-4 text-white py-8">
      <div className=" container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Travell Agency</h2>
            <p className="mb-4">
              Your trusted partner for unforgettable travell exprience. Explor
              the world with us
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick links</h4>
            <div className="flex flex-col mt-4 space-y-2">
              <Link to="/home">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 mb-4">
              <FaFacebook
                onClick={openFacebook}
                size={24}
                className="text-blue-500 hover:text-blue-600"
              />
              <FaInstagram
                onClick={openInstagram}
                size={24}
                className="text-pink-500 hover:text-pink-600"
              />
              <FaTwitter
                size={24}
                className="text-blue-400 hover:text-blue-500"
              />
              <FaYoutube
                size={24}
                className="text-red-500 hover:text-red-600"
              />
            </div>
            <form className="flex items-center justify-center mt-8">
              <input
                type="email"
                placeholder=" your Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-gray-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between mt-8 border-t border-gray-700 pt-4">
          <p>@ 2025 Travel Agency. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="">Privacy Policy</Link>
            <Link to="">Teams of Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
