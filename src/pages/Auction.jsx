// import React from "react";

// // const promise =

// const Auction = () => {
//   return (
//     <div className="container mx-auto my-20 px-20">
//       <h1 className="font-bold text-4xl my-20">Auction List</h1>
//       <div className="flex justify-between items-center mb-10"></div>
//     </div>
//   );
// };

// export default Auction;

import React, { use, useState } from "react";
import {
  FaSort,
  FaSearch,
  FaGasPump,
  FaCarSide,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaRoad,
  FaCogs,
} from "react-icons/fa";
import { LuClock } from "react-icons/lu";

const promise = fetch("/auction.json").then((res) => res.json());

const Auction = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const data = use(promise);

  const filteredCars = data
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.currentBid - b.currentBid : b.currentBid - a.currentBid
    );

  return (
    <div className="p-10 container mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search by car name..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="flex items-center gap-2 border border-[#050b20] bg-white px-4 py-2 rounded-md hover:bg-[#050b20] hover:text-white">
          <FaSort /> Sort by Bid
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">
                <FaCarSide className="inline mr-1" /> Condition
              </th>
              <th className="p-4 text-left">
                <FaMoneyBillAlt className="inline mr-1" /> Bid
              </th>
              <th className="p-4 text-left">
                <FaRoad className="inline mr-1" /> Mileage
              </th>
              <th className="p-4 text-left">
                <FaGasPump className="inline mr-1" /> Fuel
              </th>
              <th className="p-4 text-left">
                <FaCogs className="inline mr-1" /> Transmission
              </th>
              <th className="p-4 text-left">
                <LuClock className="inline mr-1" /> Time Left
              </th>
              <th className="p-4 text-left">
                <FaMapMarkerAlt className="inline mr-1" /> Location
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCars.map((car) => (
              <tr
                key={car.id}
                className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-20 h-12 object-cover rounded-md shadow"
                  />
                </td>
                <td className="p-4 font-semibold text-gray-900">{car.name}</td>
                <td className="p-4 capitalize">{car.condition}</td>
                <td className="p-4 font-semibold text-green-600">
                  ${car.currentBid.toLocaleString()}
                </td>
                <td className="p-4">{car.mileage.toLocaleString()} mi</td>
                <td className="p-4">{car.fuelType}</td>
                <td className="p-4">{car.transmission}</td>
                <td className="p-4">{car.timeRemaining}</td>
                <td className="p-4">{car.location}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredCars.length === 0 && (
          <p className="text-center py-6 text-gray-500">No cars found.</p>
        )}
      </div>
    </div>
  );
};

export default Auction;
