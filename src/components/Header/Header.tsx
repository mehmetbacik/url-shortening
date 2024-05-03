import React from "react";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { UserActions } from "./components/UserActions";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 header">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Menu />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
