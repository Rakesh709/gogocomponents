import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library

function NavBarLogo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 shadow bg-white border-b">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">
          GoGoComponent⚡
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/homepage" className="hover:underline font-medium">
            Home
          </a>
          <a href="#" className="hover:underline font-medium">
            Components
          </a>
          <a href="#" className="hover:underline font-medium">
            Docs
          </a>
          <a href="#" className="hover:underline font-medium">
            Feedback
          </a>
          <button className="bg-brown-700 text-black px-4 py-1 rounded border border-black">
            SignUp
          </button>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="/homepage" className="block font-medium">
            Home
          </a>
          <a href="/components" className="block font-medium">
            Components
          </a>
          <a href="#" className="block font-medium">
            Docs
          </a>
          <a href="#" className="block font-medium">
            Feedback
          </a>
          <button className="bg-brown-700 text-black w-full py-2 rounded border border-black">
            SignUp
          </button>
        </div>
      )}
    </header>
  );
}

export default NavBarLogo;
