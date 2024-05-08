import React from "react";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { UserActions } from "./components/UserActions";

const Header: React.FC = () => {
  return (
    <header className="px-4 py-8 header">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
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
