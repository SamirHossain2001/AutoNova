import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { IoIosLogIn, IoMdArrowDropdown } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <NavLink className="mr-3 hover:text-blue-600" to="/">
        Home
      </NavLink>
      <NavLink className="mr-3 hover:text-blue-600" to="/listing">
        Listing
      </NavLink>
      <NavLink className="mr-3 hover:text-blue-600" to="/auction">
        Auction
      </NavLink>

      {/* Clickable Dropdown */}
      <div ref={dropdownRef} className="relative inline-block mr-3">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="mr-3 flex items-center hover:text-blue-600">
          Pages <IoMdArrowDropdown />
        </button>
        {dropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded z-10 mt-2 w-40">
            <NavLink
              to="/pages/shop"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setDropdownOpen(false)}>
              Shop
            </NavLink>
            <NavLink
              to="/pages/faq"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setDropdownOpen(false)}>
              FAQ
            </NavLink>
            <NavLink
              to="/pages/calculator"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setDropdownOpen(false)}>
              Calculator
            </NavLink>
          </div>
        )}
      </div>
      <NavLink className="mr-3" to="/service">
        Service
      </NavLink>
      <NavLink className="mr-3" to="/about">
        About
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-white px-32">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-2xl font-extrabold">AutoNova</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink className="btn mr-4" to="/login">
            <IoIosLogIn size={24} /> Login
          </NavLink>
          <NavLink className="btn" to="/register">
            <FaCircleUser size={24} /> Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
