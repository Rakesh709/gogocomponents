import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 shadow bg-white border-b">
      <h1 className="text-2xl font-bold text-black m-1">
        GoGoComponent⚡
      </h1>
      <nav className="space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-medium underline" : "font-medium hover:underline"}>
          Home
        </NavLink>

        <NavLink to="/components" className={({ isActive }) => isActive ? "font-medium underline" : "font-medium hover:underline"}>
          Components
        </NavLink>

        <NavLink to="/docs" className={({ isActive }) => isActive ? "font-medium underline" : "font-medium hover:underline"}>
          Document
        </NavLink>

        <NavLink to="/feedback" className={({ isActive }) => isActive ? "font-medium underline" : "font-medium hover:underline"}>
          Feedback
        </NavLink>

        <a
          href="https://github.com/rakesh709"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-100 p-2 rounded hover:bg-gray-200"
        >
          <FaGithub size={20} />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
