import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-white bg-transparent">
      <div className="text-2xl font-bold tracking-wide cursor-pointer">
        Homeland<span className="text-red-500">.</span>
      </div>

      <ul className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-wide">
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="/buy">Buy</a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="/rent">Rent</a>
        </li>

        <li
          className="relative group cursor-pointer flex items-center gap-1"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="/propertie">
            Propertie
            <ChevronDown size={16} />
          </a>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 shadow-lg rounded-sm py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                Condo
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                Property Land
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                Commercial Building
              </a>
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer border-t border-gray-100 mt-1">
                Sub Menu <ChevronRight size={14} />
              </div>
            </div>
          )}
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          <a href="/blog">Blog</a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      <div
        className="md:hidden z-50 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col items-center justify-center text-white space-y-8 text-xl">
          <li className="hover:text-gray-300 cursor-pointer">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
          </li>
          <a href="/propertie" onClick={() => setIsMobileMenuOpen(false)}>
            Properties
          </a>
          <li className="hover:text-gray-300 cursor-pointer">
            <a href="/buy" onClick={() => setIsMobileMenuOpen(false)}>
              Buy
            </a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <a href="/rent" onClick={() => setIsMobileMenuOpen(false)}>
              Rent
            </a>
          </li>
          <a href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
