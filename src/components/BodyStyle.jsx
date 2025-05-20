import React, { use } from "react";

const promise = fetch("/selectStyle.json").then((res) => res.json());

const BodyStyle = () => {
  const categories = use(promise);
  return (
    <div className="container mx-auto my-20 px-32">
      <h1 className="text-center font-bold text-4xl mb-5">
        Select a Body Style
      </h1>
      <div className="grid grid-cols-6 gap-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border-2 border-transparent hover:border-blue-700 rounded-2xl overflow-hidden p-5">
            <img src={category.image} alt="" />
            <h1 className="text-xl font-bold text-center">{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyStyle;
