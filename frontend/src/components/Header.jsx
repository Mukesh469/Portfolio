import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollToProject } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-md px-4 sm:px-10 py-6 w-full z-50 fixed top-0 left-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <NavLink to="/" onClick={closeMenu}>
          <h1 className="text-[1.25rem] sm:text-xl font-bold text-white">
            Mukesh | Web Developer
          </h1>
        </NavLink>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-3xl text-white z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center space-x-6 text-base text-white">
          <li>
            <NavLink to="tel:8527747289" target="_blank">
              Phone
            </NavLink>
          </li>
          <li>
            <NavLink to="https://wa.me/8527747289" target="_blank">
              WhatsApp
            </NavLink>
          </li>
          <li>
            <NavLink onClick={scrollToProject}>Projects</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-3 px-4 pb-4 w-full bg-black/90 rounded-lg flex flex-col space-y-3 py-4 text-base text-white">
          <a
            href="tel:8527747289"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Phone
          </a>
          <a
            href="https://wa.me/8527747289"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
          <button onClick={() => {
            scrollToProject();
            closeMenu();
          }} className="text-left">
            Projects
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
