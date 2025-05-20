import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { IoIosLogIn, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";

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
      <NavLink className="mr-3 hover:text-blue-700" to="/">
        Home
      </NavLink>
      <NavLink className="mr-3 hover:text-blue-700" to="/listing">
        Listing
      </NavLink>
      <NavLink className="mr-3 hover:text-blue-700" to="/auction">
        Auction
      </NavLink>

      {/* Clickable Dropdown */}
      <div ref={dropdownRef} className="relative inline-block">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="mr-3 flex items-center hover:text-blue-700">
          Pages {dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        {dropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded z-10 mt-2 w-40">
            <NavLink
              to="/calculator"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700"
              onClick={() => setDropdownOpen(false)}>
              Loan Calculator
            </NavLink>
            <NavLink
              to="/faq"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700"
              onClick={() => setDropdownOpen(false)}>
              FAQ
            </NavLink>
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700"
              onClick={() => setDropdownOpen(false)}>
              DashBoard
            </NavLink>
            <NavLink
              to="/track-vehicle"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700"
              onClick={() => setDropdownOpen(false)}>
              Track Vehicle
            </NavLink>
          </div>
        )}
      </div>
      <NavLink className="mr-3 hover:text-blue-700" to="/service">
        Service
      </NavLink>
      <NavLink className="mr-3 hover:text-blue-700" to="/about">
        About
      </NavLink>
      <NavLink className="mr-3 hover:text-blue-700" to="/contact-us">
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-white px-32 py-4">
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
          <a className="text-3xl font-extrabold">AutoNova</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink
            className="btn border-2 border-blue-700 rounded-lg mr-4 hover:bg-blue-700 hover:text-white"
            to="/submitListing">
            <IoCarSportOutline size={24} /> Submit Listing
          </NavLink>
          <NavLink
            className="btn mr-4 rounded-lg hover:bg-[#050b20] hover:text-white"
            to="/login">
            <IoIosLogIn size={24} /> Login
          </NavLink>
          <NavLink
            className="btn rounded-lg hover:bg-[#050b20] hover:text-white"
            to="/register">
            <FaCircleUser size={24} /> Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
