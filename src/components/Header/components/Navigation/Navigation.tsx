import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { title: "Features", path: "/features" },
  { title: "Pricing", path: "/pricing" },
  { title: "Resources", path: "/resources" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link to={item.path} className="hover:cursor-pointer">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link to={item.path} className="hover:cursor-pointer">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
