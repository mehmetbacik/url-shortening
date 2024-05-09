import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../../types/menuItem";
import menuApi from "../../../../services/menuApi";
import { UserActions } from "../UserActions";

const Navigation: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await menuApi();
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <li key={item.title}>
        <Link to={item.path} className="hover:cursor-pointer">
          {item.title}
        </Link>
      </li>
    ));
  };

  return (
    <nav className="flex justify-between items-center navigation">
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8">
          {renderMenuItems(menuItems)}
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
          <div className="menu-area">
            <ul className="flex flex-col gap-4">
              {renderMenuItems(menuItems)}
            </ul>
          </div>
          <div className="action-area">
            <UserActions />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
