import React, { use } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import CarCard from "../components/CarCard";
import { FaGreaterThan } from "react-icons/fa";

const promise = fetch("/listing.json").then((res) => res.json());

const Listing = () => {
  const allCars = use(promise);

  return (
    <div className="container mx-auto my-20 px-20">
      <h1 className="font-bold text-4xl my-20">Available Cars</h1>
      <div className="flex justify-between items-center mb-10">
        <p className="text-gray-500">Showing 1 - 12 of 100 results</p>
        <div className="flex items-center gap-3">
          <p className="text-gray-400">Sort By</p>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 border-r whitespace-nowrap">
              <span className="mr-5">Default</span>
              <IoMdArrowDropdown className="inline" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 border-r border-white">
              <li>
                <a>Newest</a>
              </li>
              <li>
                <a>Oldest</a>
              </li>
              <li>
                <a>Lower Price</a>
              </li>
              <li>
                <a>Higher Price</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {allCars.map((car) => (
          <CarCard key={car.id} car={car}></CarCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-8 gap-3">
        <div className="btn p-4 bg-[#050b20] text-white rounded-full">
          <span>1</span>
        </div>
        <div className="btn p-4 border border-base-300 rounded-full">
          <span>2</span>
        </div>
        <div className="btn p-4 border border-base-300 rounded-full">
          <span>
            <FaGreaterThan />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Listing;
