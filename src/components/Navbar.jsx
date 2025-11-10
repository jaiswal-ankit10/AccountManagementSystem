import React from "react";
import { Container } from "./index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-12 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-500">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            AccountManagement
          </h1>
          <div className="space-x-6 hidden md:flex">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              <Link to={"/signup"}>Signup</Link>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
