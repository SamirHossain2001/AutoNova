import React from "react";
import heroImg from "../assets/hero-2.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
import CountUp from "react-countup";

const OnlineInPersonCountUp = () => {
  return (
    <div className="container mx-auto my-20 px-20">
      <div className="flex ">
        <img src={heroImg} alt="" className="flex-1" />
        <div className="flex justify-center flex-col flex-1 bg-[#050b20] text-white px-15">
          <h1 className="font-bold text-4xl mb-6">
            Online, in-person, <br />
            everywhere
          </h1>
          <p className="mb-6">
            Choose from thousands of vehicles from multiple brands and buy
            online with Click & Drive, or visit us at one of our dealerships
            today.
          </p>
          <button className="btn border-white bg-[#050b20] text-white rounded-xl py-4 px-8 w-fit hover:bg-white hover:text-black">
            Get Started <HiArrowUpRight size={20} />
          </button>
        </div>
      </div>
      {/* Count Up */}
      <div className="grid grid-cols-4 gap-5 mt-5">
        <div className="flex flex-col items-center py-10">
          <h1 className="font-bold text-5xl text-center">
            <CountUp duration={6} end={986}></CountUp> +
          </h1>
          <p className="text-xl text-center mt-4">CARS FOR SALE</p>
        </div>
        <div className="flex flex-col items-center py-10">
          <h1 className="font-bold text-5xl text-center">
            <CountUp duration={6} end={4686}></CountUp> +
          </h1>
          <p className="text-xl text-center mt-4">DEALER REVIEWS</p>
        </div>
        <div className="flex flex-col items-center py-10">
          <h1 className="font-bold text-5xl text-center">
            <CountUp duration={6} end={9438}></CountUp> +
          </h1>
          <p className="text-xl text-center mt-4">VISITORS PER DAY</p>
        </div>
        <div className="flex flex-col items-center py-10">
          <h1 className="font-bold text-5xl text-center">
            <CountUp duration={6} end={1025}></CountUp> +
          </h1>
          <p className="text-xl text-center mt-4">VERIFIED DEALERS</p>
        </div>
      </div>
      <hr className="border-base-300" />
    </div>
  );
};

export default OnlineInPersonCountUp;
