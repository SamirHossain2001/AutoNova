import React from "react";
import { NavLink } from "react-router";
import errorImg from "../assets/error.jpg";

const ErrorPageMain = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-[300px] h-[300px] mb-5">
        <img className="w-full" src={errorImg} alt="" />
      </div>
      <h1 className="text-lg md:text-4xl font-bold text-red-600">
        404 - Page Not Found
      </h1>
      <p className="md:text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink
        to="/"
        className="btn bg-[#050b20] text-white rounded-full my-6 hover:bg-blue-600">
        Go Back Home
      </NavLink>
    </div>
  );
};

export default ErrorPageMain;
