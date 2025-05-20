import React from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCar,
  AiOutlineClockCircle,
  AiOutlineDashboard,
} from "react-icons/ai";

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row py-8 gap-8 container px-20 mx-auto">
      {/* Left Side - Form */}
      <div className="md:w-2/3 bg-gray-50 p-12 flex flex-col border border-gray-300 rounded-4xl">
        <h2 className="text-4xl font-bold mb-5">Schedule Service</h2>
        <p className="mb-8 text-gray-600">
          Use our loan calculator to calculate payments over the life of your
          loan. Enter your information to see how much your monthly payments
          could be. You can adjust the length of the loan, down payment, and
          interest rate to see how those changes raise or lower your payments.
        </p>

        <form className="flex flex-col gap-6">
          {/* Name & Email */}
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <AiOutlineUser
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-gray-500"
              />
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full bg-white rounded-lg pl-10 focus:outline-none focus:border-blue-700 border-gray-300"
                required
              />
            </div>
            <div className="relative w-1/2">
              <AiOutlineMail
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-white rounded-lg pl-10 focus:outline-none focus:border-blue-700 border-gray-300"
                required
              />
            </div>
          </div>

          {/* Phone & Model */}
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <AiOutlinePhone
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input input-bordered w-full bg-white rounded-lg pl-10 focus:outline-none focus:border-blue-700 border-gray-300"
              />
            </div>
            <div className="relative w-1/2">
              <AiOutlineCar
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-gray-500"
              />
              <input
                type="text"
                placeholder="Model"
                className="input input-bordered w-full bg-white rounded-lg pl-10 focus:outline-none focus:border-blue-700 border-gray-300"
              />
            </div>
          </div>

          {/* Mileage & Best Time */}
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <AiOutlineDashboard
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-gray-500"
              />
              <input
                type="text"
                placeholder="Mileage (optional)"
                className="input input-bordered w-full bg-white rounded-lg pl-10 focus:outline-none focus:border-blue-700 border-gray-300"
              />
            </div>
            <div className="relative w-1/2">
              <AiOutlineClockCircle
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-gray-500"
              />
              <input
                type="date"
                placeholder="Best time (mm/dd/yyyy)"
                className="input input-bordered w-full bg-white rounded-lg pl-10 focus:outline-none focus:border-blue-700 border-gray-300"
              />
            </div>
          </div>

          {/* Request a Service Button */}
          <button
            type="submit"
            className="btn btn-primary bg-blue-700 px-8 py-5 rounded-2xl w-fit text-white">
            Request a Service
          </button>
        </form>

        <p className="mt-6 text-gray-600 text-sm">
          By submitting this form you will be scheduling a service appointment
          at no obligation and will be contacted within 48 hours by a service
          advisor.
        </p>
      </div>

      {/* Right Side - Opening Hours */}
      <div className="md:w-1/3 bg-white p-8 rounded-4xl border border-gray-300 h-fit ml-20">
        <h3 className="text-2xl font-semibold mb-4">Opening Hours</h3>
        <div className="text-gray-700">
          <div className="flex justify-between mb-2">
            <span>Sunday</span>
            <span>8:00 - 12:00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Monday</span>
            <span>8:00 - 17:00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tuesday</span>
            <span>8:00 - 17:00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Wednesday</span>
            <span>8:00 - 17:00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Thursday</span>
            <span>8:00 - 17:00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Friday</span>
            <span>8:00 - 17:00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Saturday</span>
            <span>8:00 - 12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
