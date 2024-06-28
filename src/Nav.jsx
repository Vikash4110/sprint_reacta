import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import logo from './assets/sprint-logo-white.svg';
import './Nav.css';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="flex justify-between items-center">
        <Link to='./' className="text-white text-xl font-bold">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/abouts" className="text-white underline-animation font-bold">About</Link>
          <Link to="/service" className="text-white underline-animation font-bold">Services</Link>
          <Link to="/project" className="text-white underline-animation font-bold">Projects</Link>
          <div className="relative group">
            <button
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
              className="text-white focus:outline-none flex items-center font-bold"
            >
              Resources
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute w-44 bg-transparent rounded-md py-2 z-10" onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>
                <Link to="/articles" className="block px-4 py-2 text-white underline-animation font-bold">Articles</Link>
                <Link to="/savingscalculator" className="block px-4 py-2 text-white underline-animation font-bold">Savings Calculator</Link>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <button className="bg-[#0DC9C5] text-white px-5 py-3 rounded-full hover:bg-[#0DC9C1] font-medium">
            <Link to="/contact" className="text-white">Contact</Link>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/about" className="block text-white underline-animation font-bold">About</Link>
          <Link to="/services" className="block text-white underline-animation font-bold">Services</Link>
          <Link to="/projects" className="block text-white underline-animation font-bold">Projects</Link>
          <div className="relative">
            <button
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
              className="w-full text-left text-white focus:outline-none flex items-center font-bold"
            >
              Resources
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="w-44 bg-transparent rounded-md py-2 z-10" onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>
                <Link to="/articles" className="block px-4 py-2 text-white underline-animation font-bold">Articles</Link>
                <Link to="/calculator" className="block px-4 py-2 text-white underline-animation font-bold">Savings Calculator</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="block text-white underline-animation font-bold">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
