import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className="flex flex-col items-center w-full bg-blue-800">
          <span>Boost your links today</span>
          <button>Get Started</button>
        </div>
        <div className="flex items-center w-full bg-gray-800">
          <div className="flex items-center w-full">
            <Link to="/" className="text-gray-300 hover:text-white px-4">
              Logo
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Link to="#" className="text-gray-300 hover:text-white">
              Facebook
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              Twitter
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
