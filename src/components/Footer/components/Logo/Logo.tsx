import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="text-gray-300 hover:text-white px-4">
      Logo
    </Link>
  );
};

export default Logo;
