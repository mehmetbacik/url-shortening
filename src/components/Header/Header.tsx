import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 header">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">URL Shortening</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/features"
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Resources
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
