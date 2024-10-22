import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-richblack-800 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <a href="#" className="hover:text-gray-300">
          Services
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
        <a href="#" className="hover:text-gray-300">
          Blog
        </a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex">
        <a
          href="#"
          className="bg-[#e9941f] text-white px-4 py-2 rounded hover:bg-[#d68c1b] transition"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
    </nav>
  );
};

export default Navbar;
