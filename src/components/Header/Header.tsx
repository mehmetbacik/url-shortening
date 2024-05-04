import React from "react";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { UserActions } from "./components/UserActions";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 header">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Navigation />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
