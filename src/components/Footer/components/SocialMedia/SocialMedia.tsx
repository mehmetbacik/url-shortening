import React from "react";
import { Link } from "react-router-dom";

const SocialMedia: React.FC = () => {
  return (
    <>
      <Link to="#" className="text-gray-300 hover:text-white">
        Facebook
      </Link>
      <Link to="#" className="text-gray-300 hover:text-white">
        Twitter
      </Link>
      <Link to="#" className="text-gray-300 hover:text-white">
        Instagram
      </Link>
    </>
  );
};

export default SocialMedia;
