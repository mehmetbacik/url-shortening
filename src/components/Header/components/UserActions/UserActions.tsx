import React from "react";
import { Link } from "react-router-dom";

const UserActions: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link
        to="/login"
        className="text-white hover:text-gray-300 cursor-pointer"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 cursor-pointer"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default UserActions;
