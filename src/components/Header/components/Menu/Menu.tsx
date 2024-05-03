import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
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
  );
};

export default Menu;
