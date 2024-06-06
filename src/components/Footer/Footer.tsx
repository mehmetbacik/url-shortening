import React from "react";
import { GetStarted } from "./components/GetStarted";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { SocialMedia } from "./components/SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="text-white animate-slideUp">
      <div className="flex flex-col justify-between items-center footer">
        <GetStarted />
        <div className="flex items-center w-full footer-content">
          <div className="w-full">
            <div className="container mx-auto">
              <div className="flex items-center">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full py-[1rem] sm:py-[5rem]">
                  <Logo />
                  <div className="flex gap-5">
                    <Navigation />
                  </div>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
