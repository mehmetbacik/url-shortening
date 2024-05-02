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
            <div className="flex gap-5">
              <nav>
                <h3 className="text-gray-300 font-semibold mb-4 text-start">Features</h3>
                <ul className="flex flex-col items-start">
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Link Shortening
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Branded Links
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Analytics
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav>
                <h3 className="text-gray-300 font-semibold mb-4 text-start">Resource</h3>
                <ul className="flex flex-col items-start">
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Support
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav>
                <h3 className="text-gray-300 font-semibold mb-4 text-start">Company</h3>
                <ul className="flex flex-col items-start">
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
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
