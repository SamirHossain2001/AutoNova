import React, { useState, useEffect, use } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const promise = fetch("/auction.json").then((res) => res.json());

const DashBoard = () => {
  const carsData = use(promise);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carsData);
  }, [carsData]);

  const handleAction = (id, action) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);

    toast.success(`Car ${action} successfully!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-700 text-white text-left">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Year</th>
              <th className="py-3 px-4">Condition</th>
              <th className="py-3 px-4">Current Bid</th>
              <th className="py-3 px-4">Mileage</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr
                key={car.id}
                className="border-b hover:bg-gray-100 transition">
                <td className="py-3 px-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-24 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 font-medium">{car.name}</td>
                <td className="py-3 px-4">{car.year}</td>
                <td className="py-3 px-4">{car.condition}</td>
                <td className="py-3 px-4">
                  ${car.currentBid.toLocaleString()}
                </td>
                <td className="py-3 px-4">{car.mileage.toLocaleString()} mi</td>
                <td className="py-3 px-4">{car.location}</td>
                <td className="py-3 px-4 flex flex-col md:flex-row gap-2">
                  <button
                    onClick={() => handleAction(car.id, "approved")}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(car.id, "verified")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    Verify
                  </button>
                  <button
                    onClick={() => handleAction(car.id, "deleted")}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {cars.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-8 text-gray-500">
                  No cars to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
