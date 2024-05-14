import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../../../library/images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="footer-logo">
      <Link to="/" className="text-gray-300 hover:text-white px-4">
        <img src={FooterLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
