import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <>
      <nav>
        <h3 className="text-gray-300 font-semibold mb-4 text-start">
          Features
        </h3>
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
        <h3 className="text-gray-300 font-semibold mb-4 text-start">
          Resource
        </h3>
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
    </>
  );
};

export default Navigation;
