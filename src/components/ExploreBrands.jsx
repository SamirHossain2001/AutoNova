import React, { use } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const promise = fetch("/brandLogo.json").then((res) => res.json());

const ExploreBrands = () => {
  const brands = use(promise);

  return (
    <div className="container mx-auto my-20 px-20">
      <div>
        <div className="flex justify-between my-5 items-center">
          <h1 className="font-bold text-4xl mb-5">
            Explore Our Premium Brands
          </h1>
          <p className="flex gap-2 hover:text-blue-700 cursor-pointer">
            Show All Brands <HiArrowUpRight size={24} />
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-5 flex flex-col items-center border-2 border-base-300 justify-center gap-4 overflow-hidden hover:border-blue-700 rounded-2xl">
              <img src={brand.image} alt={brand.name} />
              <h1 className="text-xl font-bold text-center">{brand.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreBrands;
