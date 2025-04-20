import React from 'react'

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center  px-8 py-4 shadow bg-white border-b">
      <h1 className="text-2xl font-bold text-brown-800 text-black m-1">
        GoGoComponent⚡
      </h1>
      <nav className="space-x-6">
        <a href="/homepage" className="hover:underline font-medium">
          Home
        </a>
        <a href="/components" className="hover:underline font-medium">
          Components
        </a>
        <a href="/docs" className="hover:underline font-medium">
          Docs
        </a>
        <a href="#" className="hover:underline font-medium">
          Feedback
        </a>
        <button className="bg-brown-700 text-black px-4 py-1 border-r-black rounded cursor-pointer border-1 border-r-2">
          GitHub
        </button>
      </nav>
    </header>
  );
}

export default Navbar;