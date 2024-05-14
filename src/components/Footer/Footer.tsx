import React from "react";
import { GetStarted } from "./components/GetStarted";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { SocialMedia } from "./components/SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="flex flex-col justify-between items-center footer">
        <GetStarted />
        <div className="flex items-center w-full bg-gray-800">
          <div className="flex items-center w-full">
            <Logo />
            <div className="flex gap-5">
              <Navigation />
            </div>
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
