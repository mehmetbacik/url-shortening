import React from "react";
import { Link } from "react-router-dom";

const NavigationOptions: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[2rem] lg:gap-[4rem] navigation">
      <nav>
        <h3 className="font-bold mb-4 text-start">
          Features
        </h3>
        <ul className="flex flex-col items-center lg:items-start gap-2">
          <li>
            <Link to="#" className="hover:text-white">
              Link Shortening
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Branded Links
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <h3 className="font-bold mb-4 text-start">
          Resource
        </h3>
        <ul className="flex flex-col items-center lg:items-start gap-2">
          <li>
            <Link to="#" className="hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Developers
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Support
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <h3 className="font-bold mb-4 text-start">Company</h3>
        <ul className="flex flex-col items-center lg:items-start gap-2">
          <li>
            <Link to="#" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Careers
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationOptions;
