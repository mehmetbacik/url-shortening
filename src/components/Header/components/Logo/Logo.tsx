import React from "react";
import LogoImage from "../../../../library/images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
