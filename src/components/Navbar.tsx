import React from "react";
import { Link, useNavigate } from "react-router";
import API from "../api/axios";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">URL Shortener</Link>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
