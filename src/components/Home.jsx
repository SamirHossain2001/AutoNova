import React from "react";
import Hero from "./Hero";
import BodyStyle from "./BodyStyle";
import ExploreBrands from "./ExploreBrands";
import WhyChooseUs from "./WhyChooseUs";
import OnlineInPersonCountUp from "./OnlineInPersonCountUp";
import MostSearched from "./MostSearched";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <BodyStyle></BodyStyle>
      <MostSearched></MostSearched>
      <ExploreBrands></ExploreBrands>
      <OnlineInPersonCountUp></OnlineInPersonCountUp>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
