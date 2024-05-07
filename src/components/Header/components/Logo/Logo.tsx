import React from "react";
import LogoImage from "../../../../library/images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="text-white text-2xl font-bold">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
