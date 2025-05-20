import React from "react";
import choose1 from "../assets/chooseUs-1.svg";
import choose2 from "../assets/chooseUs-2.svg";
import choose3 from "../assets/chooseUs-3.svg";
import choose4 from "../assets/chooseUs-4.svg";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto my-20 px-20">
      <div className="">
        <h1 className="font-bold text-4xl mb-10">Why Choose Us?</h1>
        <div className="grid grid-cols-4 gap-10">
          <div>
            <img src={choose1} alt="Special Financing Offers" />
            <h2 className="font-semibold text-xl mt-5 mb-3">
              Special Financing Offers
            </h2>
            <p>
              Enjoy flexible financing plans tailored to fit your budget and
              needs.
            </p>
          </div>
          <div>
            <img src={choose2} alt="Trusted Car Dealership" />
            <h2 className="font-semibold text-xl mt-5 mb-3">
              Trusted Car Dealership
            </h2>
            <p>
              We’ve built a reputation for honesty, transparency, and
              reliability.
            </p>
          </div>
          <div>
            <img src={choose3} alt="Transparent Pricing" />
            <h2 className="font-semibold text-xl mt-5 mb-3">
              Transparent Pricing
            </h2>
            <p>
              Know exactly what you're paying for with no hidden charges or
              fees.
            </p>
          </div>
          <div>
            <img src={choose4} alt="Expert Car Service" />
            <h2 className="font-semibold text-xl mt-5 mb-3">
              Expert Car Service
            </h2>
            <p>
              Our certified technicians ensure your vehicle gets the best care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
