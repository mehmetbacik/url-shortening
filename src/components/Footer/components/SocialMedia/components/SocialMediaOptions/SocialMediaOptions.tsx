import React from "react";
import { Link } from "react-router-dom";

const SocialMediaOptions: React.FC = () => {
  return (
    <>
      <div className="flex">
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
    </>
  );
};

export default SocialMediaOptions;
