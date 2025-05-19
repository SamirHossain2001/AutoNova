import React from "react";
import heroLogo from "../assets/Hero-1.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="hero mx-auto flex flex-col justify-between relative mt-5"
      style={{
        height: "660px",
        width: "1400px",
        backgroundImage: `url('${heroLogo}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "32px",
        padding: "40px",
      }}>
      {/* Top Content */}
      <div className="pt-20">
        <p className="text-white text-xl text-center mb-4">
          The World's Largest Used Car Dealership
        </p>
        <h1 className="text-white font-extrabold text-5xl text-center">
          Find Your Perfect Vehicle Online
        </h1>
      </div>

      <div className="">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black rounded-t-2xl flex justify-center gap-4 p-5">
          <div className="dropdown bg-black">
            <label
              tabIndex={0}
              className="btn m-1 text-white border-r border-white bg-black hover:bg-gray-800 whitespace-nowrap">
              <span className="mr-2">Used Cars</span>
              <IoMdArrowDropdown className="inline" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-white bg-[#0a1a2f] border-r border-white">
              <li>
                <a>New</a>
              </li>
              <li>
                <a>Used</a>
              </li>
            </ul>
          </div>
          <div className="dropdown bg-black">
            <label
              tabIndex={0}
              className="btn m-1 text-white border-r border-white bg-black hover:bg-gray-800 whitespace-nowrap">
              <span className="mr-2">Any Makes</span>
              <IoMdArrowDropdown className="inline" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-white bg-[#0a1a2f] border-r border-white">
              <li>
                <a>Audi</a>
              </li>
              <li>
                <a>BMW</a>
              </li>
              <li>
                <a>Ford</a>
              </li>
              <li>
                <a>Mercedes Benz</a>
              </li>
              <li>
                <a>Peugeot</a>
              </li>
            </ul>
          </div>
          <div className="dropdown bg-black">
            <label
              tabIndex={0}
              className="btn m-1 text-white border-r border-white bg-black hover:bg-gray-800 whitespace-nowrap">
              <span className="mr-2">Any Model</span>
              <IoMdArrowDropdown className="inline" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-white bg-[#0a1a2f] border-r border-white">
              <li>
                <a>2012</a>
              </li>
              <li>
                <a>3008</a>
              </li>
              <li>
                <a>5008</a>
              </li>
              <li>
                <a>718</a>
              </li>
              <li>
                <a>A - class</a>
              </li>
            </ul>
          </div>
          <div className="dropdown bg-black">
            <label
              tabIndex={0}
              className="btn m-1 text-white border-r border-white bg-black hover:bg-gray-800 whitespace-nowrap">
              <span className="mr-2">Price: All prices</span>
              <IoMdArrowDropdown className="inline" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-white bg-[#0a1a2f] border-r border-white">
              <li>
                <a>All prices</a>
              </li>
              <li>
                <a>$0-$10,000</a>
              </li>
              <li>
                <a>$10,001-$20,000</a>
              </li>
              <li>
                <a>$20,001-$30,000</a>
              </li>
              <li>
                <a>$30,001 +</a>
              </li>
            </ul>
          </div>
          <div className="dropdown bg-black">
            <label
              tabIndex={0}
              className="btn m-1 text-white border-r border-white bg-black hover:bg-gray-800 whitespace-nowrap">
              <span className="mr-2">Search</span>
              <FaMagnifyingGlass className="inline" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
