import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../../../../../../library/images/icon-facebook.svg";
import TwitterLogo from "../../../../../../library/images/icon-twitter.svg";
import PinterestLogo from "../../../../../../library/images/icon-pinterest.svg";
import InstagramLogo from "../../../../../../library/images/icon-instagram.svg";

const SocialMediaOptions: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-6 social">
        <Link to="#" className="text-gray-300 hover:text-white">
          <img src={FacebookLogo} alt="Facebook" />
        </Link>
        <Link to="#" className="text-gray-300 hover:text-white">
          <img src={TwitterLogo} alt="Twitter" />
        </Link>
        <Link to="#" className="text-gray-300 hover:text-white">
          <img src={PinterestLogo} alt="Pinterest" />
        </Link>
        <Link to="#" className="text-gray-300 hover:text-white">
          <img src={InstagramLogo} alt="Instagram" />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaOptions;
