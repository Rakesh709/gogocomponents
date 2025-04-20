import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center  px-8 py-4 shadow bg-white border-b">
      <h1 className="text-2xl font-bold text-brown-800 text-black m-1">
        GoGoComponent⚡
      </h1>
      <nav className="space-x-6">
        {/* <Link to="/homepage" className="hover:underline font-medium">
          Home
        </Link> */}

        <NavLink to="/homepage">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>

        {/* <Link to="/components" className="hover:underline font-medium">
          Components
        </Link> */}

        <NavLink to="/components">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Components</span>
          )}
        </NavLink>

        {/* <Link to="/docs" className="hover:underline font-medium">
          Document
        </Link> */}

        <NavLink to="/docs">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Document</span>
          )}
        </NavLink>

        {/* <Link to="/feedback" className="hover:underline font-medium">
          Feedback
        </Link> */}

        <NavLink to="/feedback">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Feedback</span>
          )}
        </NavLink>

        <button className="bg-brown-700 text-black px-4 py-1 border-r-black rounded cursor-pointer border-1 border-r-2">
          <a
            href="https://github.com/rakesh709"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaGithub size={20} />
          </a>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
