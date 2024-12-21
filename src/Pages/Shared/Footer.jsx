import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-5">
      <div className="grid grid-cols-6 gap-10 px-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {/* Company Info Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Job Hunter</h2>
          <p>
            Job Hunter is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex gap-4">
            <Link to="/facebook" aria-label="Facebook">
              <button className="w-10 h-10 flex justify-center items-center border border-gray-300 transition duration-300 hover:bg-gray-700">
                <FaFacebookF />
              </button>
            </Link>
            <Link to="/twitter" aria-label="Twitter">
              <button className="w-10 h-10 flex justify-center items-center border border-gray-300 transition duration-300 hover:bg-gray-700">
                <FaTwitter />
              </button>
            </Link>
            <Link to="/linkedin" aria-label="LinkedIn">
              <button className="w-10 h-10 flex justify-center items-center border border-gray-300 transition duration-300 hover:bg-gray-700">
                <FaLinkedinIn />
              </button>
            </Link>
            <Link to="/instagram" aria-label="Instagram">
              <button className="w-10 h-10 flex justify-center items-center border border-gray-300 transition duration-300 hover:bg-gray-700">
                <FaInstagram />
              </button>
            </Link>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Resources</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/aboutus" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/ourteam" className="hover:underline">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Community</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/feature" className="hover:underline">
                Feature
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/credit" className="hover:underline">
                Credit
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/ios" className="hover:underline">
                iOS
              </Link>
            </li>
            <li>
              <Link to="/android" className="hover:underline">
                Android
              </Link>
            </li>
            <li>
              <Link to="/microsoft" className="hover:underline">
                Microsoft
              </Link>
            </li>
            <li>
              <Link to="/desktop" className="hover:underline">
                Desktop
              </Link>
            </li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">More</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Newsletter</h2>
          <p>Submit your email to get the latest news from us.</p>
          <form className="flex flex-col gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 w-full text-white px-4 py-2  hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="mt-10 border-gray-700" />
      <div className="text-center text-sm mt-5">
        <p>Copyright © {new Date().getFullYear()} Job Hunter. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
