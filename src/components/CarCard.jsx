import React from "react";
import { FaGasPump, FaCarSide, FaTachometerAlt } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";

const CarCard = ({ car }) => {
  return (
    <div className="w-80 rounded-2xl shadow-md bg-white overflow-hidden border border-gray-200">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="px-4 py-7">
        <h2 className="text-lg font-semibold text-gray-800">{car.name}</h2>
        <p className="text-sm text-gray-500 truncate">{car.shortDesc}</p>
        <hr className="border-base-300 my-3" />
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <SlSpeedometer className="text-blue-600 mr-1" />
            <span>{car.miles} Miles</span>
          </div>
          <div className="flex items-center gap-1">
            <FaGasPump className="text-green-600 mr-1" />
            <span className="capitalize">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCarSide className="text-purple-600 mr-1" />
            <span className="capitalize">{car.transmission}</span>
          </div>
        </div>
        <hr className="border-base-300 my-3" />
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-black">
            ${car.price.toLocaleString()}
          </p>
          <a
            href="#"
            className="text-blue-700 text-sm font-semibold hover:underline">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
