import React from "react";
import { Link } from "react-router-dom";

const UserActions: React.FC = () => {
  return (
    <div className="flex items-center gap-8 user-actions">
      <Link
        to="/login"
        className="login hover:cursor-pointer"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="signup px-6 py-3 hover:cursor-pointer"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default UserActions;
