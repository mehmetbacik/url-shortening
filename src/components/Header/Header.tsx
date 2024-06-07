import React from "react";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { UserActions } from "./components/UserActions";

const Header: React.FC = () => {
  return (
    <header className="px-4 py-8 header animate-slideUp">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between gap-10 w-full sm:w-fit">
          <Logo />
          <Navigation />
        </div>
        <div className="hidden md:block">
          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
